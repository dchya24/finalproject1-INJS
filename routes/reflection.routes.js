const express = require("express");
const Router = express.Router();
const controller = require("../controllers/reflections.controller")
const auth = require("../middlewares/auth")
const validate = require("../middlewares/validation");
const schema = require("../middlewares/reflection.schema")

Router.get("/", auth.verify, controller.getReflections)
Router.post("/", 
  auth.verify,
  validate.validateRequest(schema.BODY_SCHEMA),
  controller.createReflection
);
Router.put("/:id",
  auth.verify,
  validate.validateParams(schema.ID_SCHEMA),
  validate.validateRequest(schema.BODY_SCHEMA),
  controller.updateReflection
);

Router.delete("/:id",
  auth.verify,
  validate.validateParams(schema.ID_SCHEMA),
  controller.deleteReflection);


module.exports = Router;