// Importando o multer para lidar com o upload de arquivos
const multer = require("multer");

// Importando o módulo v2 do Cloudinary para integração com a nuvem
const cloudinary = require("cloudinary").v2;

// Importando o CloudinaryStorage do multer para facilitar o upload para o Cloudinary
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configurando as credenciais do Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Criando uma instância de CloudinaryStorage para o multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "X-Rental Images", // Pasta no Cloudinary onde as imagens serão armazenadas
    allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "avif", "webp"], // Formatos permitidos
    transformation: [{ width: 500, height: 500, crop: "limit" }], // Transformações aplicadas à imagem ao fazer o upload
  },
});

// Configurando o multer com o armazenamento no Cloudinary
const upload = multer({ storage });

// Exportando a configuração do upload para uso em outros arquivos
module.exports = upload;
