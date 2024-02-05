// Importando hooks e componentes do React Router
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Importando o contexto de autenticação
import { AuthContext } from "../context/AuthProvider";

// Importando o módulo React, que é necessário para criar componentes React
import React from "react";

// Componente responsável por proteger rotas que requerem autenticação
function Protected() {
  // Utilizando o hook useContext para acessar o contexto de autenticação
  const { loading, user } = useContext(AuthContext);

  // Verificando se a autenticação está em andamento (loading)
  // Se não estiver em loading, verifica se há um usuário autenticado
  return (
    <>
      {!loading && (
        <>
          {/* Se há um usuário autenticado, renderiza o Outlet, que permite
          que as rotas aninhadas sejam renderizadas */}
          {user ? <Outlet /> : <Navigate to="/login" />}
        </>
      )}
    </>
  );
}

// Exportando o componente Protected
export default Protected;
