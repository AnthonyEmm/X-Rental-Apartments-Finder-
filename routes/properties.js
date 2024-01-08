const express = require("express");
const {
  createProperty,
  getProperties,
  getProperty,
  testUpload,
} = require("../controllers/properties.controller.js");
const uploadImage = require("../middlewares/uploadImage");
const { authenticate } = require("../middlewares/auth.js");

const propertiesRouter = express.Router();

propertiesRouter.get("/properties", getProperties);
propertiesRouter
  .route("/createlisting")
  .post(uploadImage.single("image"), authenticate, createProperty);
propertiesRouter.route("/properties/:id").get(getProperty);
propertiesRouter.route("/test").post(uploadImage.single("image"), testUpload);

module.exports = propertiesRouter;
