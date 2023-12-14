require("dotenv/config");
require("./db.js");
const express = require("express");

const userRouter = require("./routes/users.js");

const app = express();
const PORT = 4050;

app.use(express.json());
app.use("/auth", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
