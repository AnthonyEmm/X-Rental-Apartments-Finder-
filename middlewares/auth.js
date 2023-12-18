const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const {
      cookies: { access_token: token },
    } = req;

    if (!token) throw new Error("Forbidden");

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { authenticate };
