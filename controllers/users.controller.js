const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model.js");

const register = async (req, res) => {
  try {
    const {
      body: { email, password, name },
    } = req;

    const foundUser = await User.findOne({ email });
    if (foundUser) throw new Error("User Already Exists");

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash, name });

    const payload = { id: user._id, name: user.name, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    res.status(201).json(payload);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const login = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("Could not find user");

    const userMatch = await bcrypt.compare(password, user.password);
    if (!userMatch) throw Error("Invalid password");

    // This step is for User who signed up be send to login page immediately after the signup process //
    const payload = { id: user._id, name: user.name, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    console.log(token);

    res.json(payload);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

module.exports = {
  register,
  login,
};
