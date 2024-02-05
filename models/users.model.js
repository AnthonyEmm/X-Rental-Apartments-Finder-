// Importando as bibliotecas necessárias
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// Definindo o Schema para os usuários
const userSchema = new Schema({
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true, select: false }, // O campo 'select: false' indica que a senha não será retornada nas consultas por padrão
  name: { type: String },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

// Middleware pré-hook para converter o email para minúsculas antes de fazer a consulta no banco de dados
userSchema.pre("findOne", function (next) {
  const query = this.getQuery();
  if (query.email) query.email = query.email.toLowerCase();
  next();
});

// Middleware pré-hook para hash da senha antes de salvar no banco de dados
userSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10); // Usando bcrypt para hash da senha com um custo de 10 (número de rounds)

  this.updatedAt = Date.now(); // Atualiza o campo 'updatedAt' para a data e hora atuais

  next();
});

// Criando o modelo 'User' baseado no Schema definido
module.exports = model("User", userSchema);
