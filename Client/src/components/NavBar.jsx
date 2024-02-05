// Importando React, useState e useContext do React
import React, { useState, useContext } from "react";

// Importando o contexto de autenticação
import { AuthContext } from "../context/AuthProvider";

// Importando estilos específicos do componente NavBar
import "./NavBar.css";

// Importando o componente Link do React Router
import { Link } from "react-router-dom";

// Importando a imagem do avatar padrão e o logo da aplicação
import Avatar from "../assets/user-circle-fill.svg";
import logo from "../assets/logo.svg";

// Componente NavBar responsável pela navegação
function NavBar() {
  // Obtendo dados do contexto de autenticação
  const { logout, loading, user } = useContext(AuthContext);

  // Estado para controlar a abertura/fechamento do menu offcanvas
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  // Função para alternar a visibilidade do menu offcanvas
  const handleToggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  // Função para fechar o menu offcanvas
  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  // Renderização do componente NavBar
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-inherit p-3">
      <div className="container-fluid px-4">
        {/* Link para a página inicial com o logo da aplicação */}
        <Link
          to="/"
          className="navbar-brand d-flex justify-content-center align-items-center gap-2 fw-bold fs-4 "
        >
          <img src={logo} alt="Logo" />
          <span>X Rental</span>
        </Link>

        {/* Botão de toggle para o menu offcanvas */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleOffcanvas}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        {/* Menu offcanvas */}
        <div
          className={`offcanvas bg-dark offcanvas-end ${
            isOffcanvasOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="navbarNav"
          aria-labelledby="navbarNavLabel"
        >
          <div className="offcanvas-header justify-content-end ">
            {/* Botão para fechar o menu offcanvas */}
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={handleCloseOffcanvas}
              style={{
                backgroundColor: "green",
                color: "green",
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "50px",
              }}
            ></button>
          </div>
          <div className="offcanvas-body justify-content-end w-100">
            {/* Lista de links do menu */}
            <ul className="navbar-nav gap-4" role="menu">
              {/* Link para a página inicial */}
              <Link
                to="/"
                className="nav-link nav-item"
                aria-current="page"
                onClick={handleCloseOffcanvas}
              >
                Home
              </Link>

              {/* Link para a página "Sobre" */}
              <Link
                to="/about"
                className="nav-link nav-item"
                onClick={handleCloseOffcanvas}
              >
                About
              </Link>

              {/* Condicional para renderizar links dependendo do estado de autenticação */}
              {!loading && (
                <>
                  {/* Se o usuário não estiver autenticado */}
                  {!user ? (
                    <Link
                      to="/login"
                      className="nav-link nav-item"
                      onClick={handleCloseOffcanvas}
                    >
                      Sign In
                    </Link>
                  ) : (
                    <>
                      {/* Links para usuários autenticados */}
                      <Link
                        to="/listings"
                        className="nav-link nav-item"
                        onClick={handleCloseOffcanvas}
                      >
                        Listings
                      </Link>
                      <Link to="/upload" className="nav-link nav-item">
                        Create Property
                      </Link>
                      {/* Dropdown para o perfil do usuário */}
                      <li className=" dropdown">
                        <Link
                          className="nav-link dropdown-toggle nav-item"
                          to="/profile"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {/* Exibindo o avatar do usuário */}
                          <img
                            src={user.avatar || Avatar}
                            alt="profile"
                            className="nav-item rounded-circle object-cover"
                            style={{ width: "30px", height: "30px" }}
                          />
                        </Link>
                        {/* Menu dropdown com opções do perfil */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdown "
                          style={{
                            backgroundColor: "rgb(33, 31, 31)",
                            width: "12rem",
                            color: "rgb(17, 189, 74)",
                          }}
                        >
                          <li>
                            <Link
                              to="/profile"
                              className="dropdown-item nav-item"
                              onClick={handleCloseOffcanvas}
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/update"
                              className="dropdown-item nav-item"
                              onClick={handleCloseOffcanvas}
                            >
                              Update Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/login"
                              className="dropdown-item nav-item"
                              onClick={logout}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Exportando o componente NavBar
export default NavBar;
