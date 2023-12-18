const express = require("express");
const {
  createProperty,
  getProperties,
  getProperty,
} = require("../controllers/properties.controller.js");

const propertiesRouter = express.Router();

propertiesRouter.get("/properties", getProperties);
propertiesRouter.post("/createlisting", createProperty);
propertiesRouter.route("/:id").get(getProperty);

module.exports = propertiesRouter;
