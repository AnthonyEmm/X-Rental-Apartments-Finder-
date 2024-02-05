// Importando as bibliotecas necessárias do React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Importando o componente principal da aplicação
import App from "./App.jsx";

// Importando o arquivo de estilos global da aplicação
import "./index.css";

// Importando o provedor de autenticação customizado
import AuthProvider from "./context/AuthProvider.jsx";

// Criando a raiz do aplicativo React e renderizando o componente principal
// em um elemento HTML com o id "root" usando o novo modelo de renderização
ReactDOM.createRoot(document.getElementById("root")).render(
  // Modo estrito do React, que ajuda a identificar práticas problemáticas no código
  <React.StrictMode>
    {/* Configurando o roteador para gerenciar as rotas da aplicação */}
    <BrowserRouter>
      {/* Fornecendo o contexto de autenticação para toda a aplicação */}
      <AuthProvider>
        {/* Componente principal da aplicação */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
