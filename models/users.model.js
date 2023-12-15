const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true, select: false },
  name: { type: String },
  avatar: { type: String },
});

userSchema.pre("findOne", function (next) {
  const query = this.getQuery();
  if (query.email) query.email = query.email.toLowerCase();
  next();
});

module.exports = model("User", userSchema);
