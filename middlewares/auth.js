const jwt = require("jsonwebtoken");
const SECRET_KEY = "doladolado";

exports.verify = (req, res, next) => {
  const token = req.headers['x-access-token'];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if(err){
      console.log(err)
      return res.status(500)
        .json({
          status: "ERROR",
          message: err.message
        })
    }

    req.userId = decoded.id;
    next();
  })
}