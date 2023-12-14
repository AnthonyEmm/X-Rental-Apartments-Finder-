const express = require("express");
const {
  createProperty,
  getProperties,
} = require("../controllers/properties.controller.js");

const propertiesRouter = express.Router();

propertiesRouter.get("/properties", getProperties);
propertiesRouter.post("/createlisting", createProperty);

module.exports = propertiesRouter;
