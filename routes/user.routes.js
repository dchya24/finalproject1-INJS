const express = require('express');
const Router = express.Router();
const controller = require('../controllers/user.controller')
const validate = require("../middlewares/validation");
const schema = require("../middlewares/user.schema")

Router.post("/register",
    validate.validateRequest(schema.USER_SCHEMA),
    controller.register
)
Router.post("/login",
    validate.validateRequest(schema.USER_SCHEMA),
    controller.login
)

module.exports = Router;