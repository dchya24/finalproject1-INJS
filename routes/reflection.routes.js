const express = require("express");
const Router = express.Router();
const auth = require("../middlewares/auth")
const controller = require("../controllers/reflections.controller")

Router.get("/", auth.verify, controller.getReflections)
Router.post("/", auth.verify, controller.createReflection);
Router.put("/:id", auth.verify, controller.updateReflection);
Router.delete("/:id", auth.verify, controller.deleteReflection);


module.exports = Router;