const jwt = require("jsonwebtoken");
const SECRET_KEY = "doladolado";

const verify = (req, res, next) => {
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

const generateToken = (payload) => {
  return jwt.sign(payload, privateKey, {
    algorithm: 'HS256',
    expiresIn: "1h"
  })
}

module.exports = {
  verify,
  generateToken
}

