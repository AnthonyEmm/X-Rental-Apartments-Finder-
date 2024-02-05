// Importando o pacote dotenv para configuração de variáveis de ambiente
require("dotenv/config");

// Importando pacotes necessários
const cors = require("cors"); // Middleware para habilitar o CORS (Cross-Origin Resource Sharing)
const path = require("path"); // Utilizado para manipulação de caminhos de arquivo
const cookieParser = require("cookie-parser"); // Middleware para processar cookies
require("./db.js"); // Importando a configuração do banco de dados (assumindo que está em db.js)
const express = require("express"); // Importando o framework Express

// Importando rotas
const userRouter = require("./routes/users.js");
const propertiesRouter = require("./routes/properties.js");

// Criando uma instância do aplicativo Express
const app = express();

// Configuração do número da porta em que o servidor vai ouvir
const PORT = 4050;

// Middleware para processar cookies
app.use(cookieParser());

// Middleware para habilitar o CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Permitindo apenas requisições originadas nesse endereço
    credentials: true, // Permitindo o envio de cookies na requisição
  }),
);

// Configurando o Express para servir arquivos estáticos a partir do diretório 'Client/dist'
app.use(express.static(path.join(__dirname, "Client", "dist")));

// Configurando o Express para processar dados no formato JSON
app.use(express.json());

// Roteamento para as rotas relacionadas à autenticação e propriedades
app.use("/api/auth", userRouter);
app.use("/api/", propertiesRouter);

// Rota para tratar qualquer outro caminho, servindo o arquivo index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "dist", "index.html"));
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Iniciando o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
