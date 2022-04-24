const jwt = require("jsonwebtoken");
const SECRET_KEY = "doladolado";

const verify = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(500)
        .json({
          status: "ERROR",
          message: err.message
        })
    }

    req.userId = decoded.userId;
    next();
  })
}

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

module.exports = {
  verify,
  generateToken
}

