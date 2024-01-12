const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const uploadMultiple = multer({ storage: storage });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const cloudinaryUpload = async (req, res, next) => {
  try {
    const { files } = req;
    const images = [];
    console.log(files);
    for (const file of files) {
      const response = await cloudinary.uploader.upload(file.path);
      images.push(response.secure_url);
      console.log(response.secure_url);
      fs.unlink(file.path, (err, data) => {
        if (err) {
          console.error(err);
          throw err;
        }
      });
    }

    req.images = images;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  cloudinaryUpload,
  uploadMultiple,
};
