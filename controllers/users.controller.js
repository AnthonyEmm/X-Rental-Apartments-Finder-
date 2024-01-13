const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model.js");

// Creating a POST request for User Signup //
const register = async (req, res, next) => {
  try {
    const {
      body: { email, password, name },
    } = req;
    console.log(req.file);
    const foundUser = await User.findOne({ email });
    if (foundUser) throw new Error("User Already Exists");

    // const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password,
      name,
      avatar: req.file.path,
    });

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    res.status(201).json(payload);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Creating a POST request for User Login //
const login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("User Does Not Exist");
    // Bcrypt password compare //
    const userMatch = await bcrypt.compare(password, user.password);
    if (!userMatch) throw Error("Incorrect password");

    // This step is for User who signed up be send to login page immediately after the signup process //
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    console.log(token);

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 28800000 })
      .json(payload);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Creating a POST request for User Logout //
const logout = async (req, res, next) => {
  try {
    res
      .cookie("access_token", "", { httpOnly: true, maxAge: 0 })
      .json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Creating a GET request for User Profile //
const getProfile = async (req, res, next) => {
  try {
    const {
      user: { id },
    } = req;

    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Creating a POST request for User credentials Update //
const updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    // if (req.user.id !== req.params.id)
    //   throw new Error("You can only update your own account");

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true },
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Creating a POST request to delete User profile //
const deleteProfile = async (req, res, next) => {
  try {
    const {
      user: { id },
    } = req;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  updateUser,
  getProfile,
  deleteProfile,
};
