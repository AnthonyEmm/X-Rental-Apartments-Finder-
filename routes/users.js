// Importando o framework Express
const express = require("express");

// Importando funções do controlador de usuários
const {
  register,
  login,
  logout,
  updateUser,
  getProfile,
  getOwnerProfile,
  deleteProfile,
} = require("../controllers/users.controller.js");

// Importando middleware de autenticação
const { authenticate } = require("../middlewares/auth.js");

// Importando middleware para upload de imagem
const upload = require("../middlewares/uploadImage.js");

// Importando função do controlador de propriedades para exclusão de propriedades por usuário
const { deletePropertiesByUser } = require("../controllers/properties.controller.js");

// Criando um roteador para as rotas de usuário
const userRouter = express.Router();

// Rotas para operações de usuário
userRouter.post("/signup", upload.single("avatar"), register); // Rota para registrar um novo usuário
userRouter.post("/login", login); // Rota para fazer login
userRouter.post("/logout", logout); // Rota para fazer logout
userRouter.post(
  "/update/:id",
  authenticate,
  upload.single("avatar"),
  updateUser
); // Rota para atualizar informações do usuário
userRouter.get("/profile", authenticate, getProfile); // Rota para obter o perfil do usuário autenticado
userRouter.get("/profile/:id", authenticate, getOwnerProfile); // Rota para obter o perfil de um proprietário
userRouter.post(
  "/delete/:id",
  authenticate,
  deletePropertiesByUser,
  deleteProfile
); // Rota para excluir usuário e suas propriedades

// Exportando o roteador
module.exports = userRouter;
