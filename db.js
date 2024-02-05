// Importando a biblioteca mongoose para interagir com o MongoDB
const mongoose = require("mongoose");

// Conectando ao MongoDB usando a string de conexão fornecida nas variáveis de ambiente (process.env.CONNECTION_STRING)
mongoose
  .connect(process.env.CONNECTION_STRING) // Conecta ao MongoDB usando a string de conexão
  .then((resizeBytes) => {
    // A conexão foi bem-sucedida
    // O parâmetro 'resizeBytes' é uma informação irrelevante para a conexão
    // Pode ser omitido se não for necessário realizar alguma operação específica aqui
  })
  .catch((error) => {
    // Se houver algum erro durante a conexão
    console.log(error); // Imprime o erro no console para fins de depuração
  });
