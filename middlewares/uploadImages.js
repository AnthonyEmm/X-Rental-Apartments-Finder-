const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;

// Configuração do armazenamento local com o multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Define a pasta de destino como "uploads"
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix); // Gera um nome de arquivo único usando a data e um número aleatório
  },
});

// Configuração do multer com o armazenamento local
const uploadMultiple = multer({ storage: storage });

// Configuração do Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Middleware para fazer upload para o Cloudinary
const cloudinaryUpload = async (req, res, next) => {
  try {
    const { files } = req;
    const images = [];

    // Itera sobre os arquivos e faz upload para o Cloudinary
    for (const file of files) {
      const response = await cloudinary.uploader.upload(file.path);

      // Adiciona a URL da imagem ao array
      images.push(response.secure_url);

      // Remove o arquivo local após o upload para economizar espaço
      await fs.unlink(file.path);
    }

    // Adiciona as URLs das imagens ao objeto de requisição
    req.images = images;

    // Chama o próximo middleware
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
