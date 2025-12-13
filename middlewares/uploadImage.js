const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { Readable } = require("stream");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to upload a single file to Cloudinary
const uploadToCloudinary = (req, res, next) => {
  if (!req.file) return next();

  const bufferStream = new Readable();
  bufferStream.push(req.file.buffer);
  bufferStream.push(null);

  cloudinary.uploader
    .upload_stream(
      {
        folder: "X-Rental Images",
        allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "avif", "webp"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
      },
      (error, result) => {
        if (error) return next(error);
        req.file.cloudinaryUrl = result.secure_url;
        req.file.cloudinaryId = result.public_id;
        next();
      },
    )
    .end(req.file.buffer);
};

module.exports = { upload, uploadToCloudinary };
