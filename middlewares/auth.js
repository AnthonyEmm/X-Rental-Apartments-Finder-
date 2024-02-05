// Importando a biblioteca jsonwebtoken
const jwt = require("jsonwebtoken");

// Middleware de autenticação
const authenticate = (req, res, next) => {
  try {
    // Obtendo o token do cookie 'access_token' na requisição
    const {
      cookies: { access_token: token },
    } = req;

    // Verificando se o token está presente
    if (!token) throw new Error("Forbidden");

    // Decodificando o token usando a chave secreta definida no ambiente
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Atribuindo o payload do token à propriedade req.user
    req.user = payload;

    // Passando para o próximo middleware
    next();
  } catch (error) {
    // Lidando com erros durante o processo de autenticação
    console.log(error);

    // Passando o erro para o próximo middleware
    next(error);
  }
};

// Exportando o middleware para uso em outros arquivos
module.exports = { authenticate };
