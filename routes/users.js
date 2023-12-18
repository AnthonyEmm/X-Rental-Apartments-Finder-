const express = require("express");
const {
  register,
  login,
  logout,
  updateUser,
  getProfile,
} = require("../controllers/users.controller.js");
const { authenticate } = require("../middlewares/auth.js");

const userRouter = express.Router();

userRouter.post("/signup", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/update/:id", authenticate, updateUser);
userRouter.get("/profile", authenticate, getProfile);

module.exports = userRouter;
