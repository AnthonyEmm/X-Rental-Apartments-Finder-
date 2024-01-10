const express = require("express");
const {
  register,
  login,
  logout,
  updateUser,
  getProfile,
} = require("../controllers/users.controller.js");
const verifyToken = require("../middlewares/verifyToken.js");
const { authenticate } = require("../middlewares/auth.js");
const upload = require("../middlewares/uploadImage.js");

const userRouter = express.Router();

userRouter.post("/signup", upload.single("avatar"), register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/update/:id", authenticate, updateUser);
userRouter.get("/profile/:id", authenticate, getProfile);

module.exports = userRouter;
