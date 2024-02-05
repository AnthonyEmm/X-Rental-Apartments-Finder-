const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((resizeBytes) => {})
  .catch((error) => {
    console.log(error);
  });
