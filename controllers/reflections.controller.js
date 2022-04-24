const db = require("../config/db")

exports.getReflections = async(req, res,next) => {
  try{
    const owner_id = req.userId;
    const data = await db.query("SELECT * FROM reflections WHERE owner_id=$1", [owner_id]);

    res.json({
      data: data.rows
    })
  }
  catch(error){
    console.log(error)
    next(error)
  }
}

exports.createReflection = async(req, res, next) => {
  try{
    const success = req.body.success;
    const low_point = req.body.low_point;
    const take_away = req.body.take_away;
    const owner_id = req.userId;
    const date = new Date();
  
    const query = {
      text: "INSERT INTO reflections(success, low_point, take_away, owner_id, created_date, modified_date)"
            + "VALUES($1, $2, $3, $4, $5, $6) RETURNING id, success, low_point, take_away, owner_id, created_date, modified_date",
      values: [success, low_point, take_away, owner_id, date, date]
    }
  
    const result = await db.query(query)
    res.json(result.rows[0]);
  }
  catch(error){
    console.log(error)
    next(error);
  }
}

exports.updateReflection = async(req, res, next) => {
  try{
    const $id = req.params.id
    const success = req.body.success;
    const low_point = req.body.low_point;
    const take_away = req.body.take_away;
    const owner_id = req.userId;
    const date = new Date();
  
    const query = {
      text: "UPDATE reflections SET success=$1, low_point=$2, take_away=$3, modified_date=$4 " +
            "WHERE id=$5 AND owner_id=$6 RETURNING id, success, low_point, take_away, owner_id, created_date, modified_date",
      values: [success, low_point, take_away, date, $id, owner_id]
    }

    const result = await db.query(query)
  
    if(result.rows.length > 0){
      res.json(result.rows[0]);
    }
    else {
      res.status(400)
        .json({"message": "Reflection tidak ditemukan!"})
    }
  }
  catch(error){
    console.log(error)
    next(error);
  }
}

exports.deleteReflection = async(req, res, next) => {
  try{
    const id = req.params.id;
    const owner_id = req.userId;

    const query = {
      text: "DELETE FROM reflections WHERE id=$1 AND owner_id=$2",
      values: [id, owner_id]
    }

    const result = await db.query(query)
    
    if(result.rowCount > 0){
      res.json({
        "message": "Reflection berhasil dihapus!"
      });
    }
    else {
      res.status(400)
        .json({"message": "Reflection tidak ditemukan!"})
    }

  }
  catch(error){
    console.log(error)
    next(error);
  }
}