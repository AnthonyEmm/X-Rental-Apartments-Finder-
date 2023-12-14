const express = require("express");
const {
  createProperty,
  getProperties,
} = require("../controllers/properties.controller.js");

const propertiesRouter = express.Router();

propertiesRouter.get("/list", getProperties);
propertiesRouter.post("/create", createProperty);

module.exports = propertiesRouter;
