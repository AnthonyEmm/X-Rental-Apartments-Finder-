const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  name: { type: String },
  avatar: { type: String },
});

module.exports = model("User", userSchema);
