const express = require("express");
const {
  register,
  login,
  logout,
  updateUser,
  getProfile,
  getOwnerProfile,
  deleteProfile,
} = require("../controllers/users.controller.js");
const { authenticate } = require("../middlewares/auth.js");
const { upload, uploadToCloudinary } = require("../middlewares/uploadImage.js");
const {
  deletePropertiesByUser,
} = require("../controllers/properties.controller.js");

const userRouter = express.Router();

// Signup with avatar upload
userRouter.post(
  "/signup",
  upload.single("avatar"),
  uploadToCloudinary,
  register,
);

// Login / Logout
userRouter.post("/login", login);
userRouter.post("/logout", logout);

// Update user with avatar
userRouter.post(
  "/update/:id",
  authenticate,
  upload.single("avatar"),
  uploadToCloudinary,
  updateUser,
);

// Profiles
userRouter.get("/profile", authenticate, getProfile);
userRouter.get("/profile/:id", authenticate, getOwnerProfile);

// Delete user
userRouter.post(
  "/delete/:id",
  authenticate,
  deletePropertiesByUser,
  deleteProfile,
);

module.exports = userRouter;
