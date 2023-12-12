require("dotenv/config");
const express = require("express");
require("./db.js");
const app = express();
const PORT = 4050;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
