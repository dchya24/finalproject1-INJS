const express = require('express');
const Router = express.Router();
const auth = require("../middlewares/auth")
const controller = require('../controllers/user.controller')

Router.post("/createUser", auth.verify, controller.createUser)
Router.post("/loginUser", auth.verify, controller.loginUser)

module.exports = Router;