const express = require("express");
const {
  createProperty,
  getProperties,
  getProperty,
  testUpload,
} = require("../controllers/properties.controller.js");
const { upload, uploadToCloudinary } = require("../middlewares/uploadImage.js");
const {
  uploadMultiple,
  cloudinaryUpload,
} = require("../middlewares/uploadImages.js");
const { authenticate } = require("../middlewares/auth.js");

const propertiesRouter = express.Router();

// Get all properties
propertiesRouter.get("/properties", getProperties);

// Create new listing (multiple images)
propertiesRouter
  .route("/createlisting")
  .post(
    authenticate,
    uploadMultiple.array("images"),
    cloudinaryUpload,
    createProperty,
  );

// Get a single property
propertiesRouter.route("/properties/:id").get(getProperty);

// Test single image upload
propertiesRouter
  .route("/test")
  .post(upload.single("image"), uploadToCloudinary, testUpload);

module.exports = propertiesRouter;
