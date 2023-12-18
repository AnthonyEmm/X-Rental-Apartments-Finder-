const bcrypt = require("bcrypt");
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

userSchema.pre("save", async function (next) {
  console.log("save");
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10);

  next();
});
module.exports = model("User", userSchema);
