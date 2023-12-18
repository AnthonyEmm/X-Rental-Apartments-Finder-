const express = require("express");
const {
  createProperty,
  getProperties,
  getProperty,
  testUpload,
} = require("../controllers/properties.controller.js");
const uploadImage = require("../middlewares/uploadImage");

const propertiesRouter = express.Router();

propertiesRouter.get("/properties", getProperties);
propertiesRouter.post("/createlisting", createProperty);
propertiesRouter.route("/:id").get(getProperty);
propertiesRouter.route("/test").post(uploadImage.single("image"), testUpload);

module.exports = propertiesRouter;
