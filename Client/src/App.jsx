// Importando o módulo React, que é necessário para criar componentes React
import React from "react";

// Importando o arquivo de estilos global da aplicação
import "./App.css";

// Importando componentes do React Router para lidar com navegação
import { Routes, Route } from "react-router-dom";

// Importando estilos do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importando componentes da aplicação
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Update from "./components/Update";
import Upload from "./components/Upload";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PropertyDetails from "./components/PropertyDetails";
import PropertyList from "./components/PropertyList";
import ContactForm from "./components/contactForm";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Protected from "./components/Protected";
import DeleteUserProfile from "./components/DeleteProfile";
import About from "./components/About";

// Função principal que representa a aplicação React
function App() {
  return (
    // Container principal com uma classe de estilo de fundo
    <div className="bg-color">
      {/* Barra de navegação */}
      <NavBar />

      {/* Configuração das rotas da aplicação */}
      <Routes>
        {/* Rota inicial que renderiza o componente Home */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página "Sobre" */}
        <Route path="/about" element={<About />} />

        {/* Rota para a página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota para a página de registro */}
        <Route path="/sign-up" element={<SignUp />} />

        {/* Rota para a página de contato */}
        <Route path="/contact" element={<ContactForm />} />

        {/* Rota protegida que envolve várias outras rotas */}
        <Route path="/" element={<Protected />}>
          {/* Rotas protegidas acessíveis somente quando o usuário está autenticado */}
          <Route path="/listings" element={<PropertyList />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/:id" element={<UserProfile showOwner />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete-profile" element={<DeleteUserProfile />} />
        </Route>
      </Routes>

      {/* Rodapé da aplicação */}
      <Footer />
    </div>
  );
}

// Exportando a função App como o componente principal da aplicação
export default App;
