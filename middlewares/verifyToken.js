const jwt = require("jsonwebtoken");

// Middleware para verificar o token JWT
const verifyToken = async (req, res, next) => {
  try {
    // Obtém o token do cookie de acesso
    const token = req.cookies.access_token;

    // Se não houver token, retorna um erro de acesso proibido
    if (!token) throw new Error("Forbidden access");

    // Verifica o token usando a chave secreta do JWT
    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    // Adiciona o payload do usuário ao objeto de requisição
    req.user = payload;

    // Chama o próximo middleware
    next();
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro ao cliente
    res.status(500).send("Something went wrong");
  }
};

// Exporta o middleware para uso em outros arquivos
module.exports = verifyToken;
