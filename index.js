require("dotenv/config");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
require("./db.js");
const express = require("express");

const userRouter = require("./routes/users.js");
const propertiesRouter = require("./routes/properties.js");

const app = express();
const PORT = 4050;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.static(path.join(__dirname, "Client", "dist")));
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/", propertiesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
