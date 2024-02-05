// Importando o framework Express
const express = require("express");

// Importando funções do controlador de propriedades
const {
  createProperty,
  getProperties,
  getProperty,
  testUpload,
} = require("../controllers/properties.controller.js");

// Importando middleware para upload de imagem
const uploadImage = require("../middlewares/uploadImage");

// Importando middlewares para upload de imagens no Cloudinary
const {
  uploadMultiple,
  cloudinaryUpload,
} = require("../middlewares/uploadImages.js");

// Importando middleware de autenticação
const { authenticate } = require("../middlewares/auth.js");

// Criando um roteador para as rotas de propriedades
const propertiesRouter = express.Router();

// Rota para obter todas as propriedades
propertiesRouter.get("/properties", getProperties);

// Rota para criar uma nova propriedade
propertiesRouter
  .route("/createlisting")
  .post(
    authenticate,
    uploadMultiple.array("images"),
    cloudinaryUpload,
    createProperty
  );

// Rota para obter informações de uma propriedade específica
propertiesRouter.route("/properties/:id").get(getProperty);

// Rota de teste para upload de imagem
propertiesRouter.route("/test").post(uploadImage.single("image"), testUpload);

// Exportando o roteador
module.exports = propertiesRouter;
