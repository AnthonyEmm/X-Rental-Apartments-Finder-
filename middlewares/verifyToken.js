const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) throw new Error("Forbidden access");

    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;

    next();
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
module.exports = verifyToken;
