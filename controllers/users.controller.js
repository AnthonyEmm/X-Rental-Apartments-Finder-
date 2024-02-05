// Importando as dependências necessárias
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model.js");

// Função para processar um pedido POST de registro de usuário
const register = async (req, res, next) => {
  try {
    const {
      body: { email, password, name },
    } = req;

    // Verificando se o usuário já existe
    const foundUser = await User.findOne({ email });
    if (foundUser) throw new Error("User Already Exists");

    // Criando um novo usuário
    const user = await User.create({
      email,
      password,
      name,
      avatar: req.file.path, // Caminho para a imagem do avatar (após o upload)
    });

    // Gerando um token JWT para o novo usuário
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    // Respondendo com os detalhes do usuário e o token gerado (status 201 - Created)
    res.status(201).json(payload);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para processar um pedido POST de login de usuário
const login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    // Procurando o usuário no banco de dados
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("User Does Not Exist");

    // Comparando a senha usando bcrypt
    const userMatch = await bcrypt.compare(password, user.password);
    if (!userMatch) throw Error("Incorrect password");

    // Gerando um token JWT para o usuário autenticado
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    // Definindo o token como um cookie de acesso e respondendo com os detalhes do usuário
    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 28800000 })
      .json(payload);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para processar um pedido POST de logout de usuário
const logout = async (req, res, next) => {
  try {
    // Limpando o cookie de acesso
    res
      .cookie("access_token", "", { httpOnly: true, maxAge: 0 })
      .json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para processar um pedido GET de perfil de usuário
const getProfile = async (req, res, next) => {
  try {
    const {
      user: { id },
    } = req;

    // Obtendo detalhes do usuário pelo ID
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para processar um pedido GET de perfil de proprietário
const getOwnerProfile = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    // Obtendo detalhes do usuário (proprietário) pelo ID
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para processar um pedido POST de atualização de credenciais do usuário
const updateUser = async (req, res, next) => {
  try {
    // Verificando se a senha está presente para criptografá-la antes de atualizar o usuário
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    // Atualizando o usuário no banco de dados
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          email: req.body.email,
          password: req.body.password,
          avatar: req.file.path, // Caminho para a nova imagem do avatar (após o upload)
        },
      },
      { new: true },
    );

    // Respondendo com os detalhes atualizados do usuário
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Função para processar um pedido POST de exclusão de perfil de usuário
const deleteProfile = async (req, res, next) => {
  try {
    const {
      user: { id },
    } = req;

    // Excluindo o usuário do banco de dados
    const user = await User.findByIdAndDelete(id);

    // Verificando se o usuário foi encontrado e excluído com sucesso
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Limpando o cookie de acesso e respondendo com os detalhes do usuário excluído
    res.cookie("access_token", "", { httpOnly: true, maxAge: 0 }).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Exportando todas as funções como métodos do controlador
module.exports = {
  register,
  login,
  logout,
  updateUser,
  getProfile,
  getOwnerProfile,
  deleteProfile,
};
