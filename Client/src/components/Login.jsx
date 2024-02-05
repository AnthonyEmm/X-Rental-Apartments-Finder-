// Importando hooks e componentes do React
import { useContext, useState, useEffect } from "react";
import React from "react";

// Importando estilos específicos do componente Login
import "./Login.css";

// Importando o componente Link do React Router
import { Link } from "react-router-dom";

// Importando o hook useNavigate do React Router para navegação programática
import { useNavigate } from "react-router-dom";

// Importando ícones FontAwesome para exibição de ícones de olho (mostrar/senhas)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// Importando o contexto de autenticação
import { AuthContext } from "../context/AuthProvider";

// Componente de Login
function Login() {
  // Hook useNavigate para navegação programática
  const navigate = useNavigate(true);

  // Obtendo dados do contexto de autenticação
  const { user, login } = useContext(AuthContext);

  // Estados para controle dos campos e mensagens do formulário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Função para validar a senha
  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/;
    return passwordRegex.test(password);
  };

  // Função para lidar com o processo de login
  const handleLogin = async (e) => {
    // Validando a senha antes de realizar o login
    if (!validatePassword()) {
      setError("Password must be 8-10 letters and one number");
    }

    // Prevenindo o comportamento padrão do formulário
    e.preventDefault();

    // Resetando estados de erro, sucesso e definindo o estado de carregamento
    setError(false);
    setSuccess(false);
    setLoading(true);

    try {
      // Chamando a função de login do contexto de autenticação
      await login({
        email,
        password,
      });

      // Configurando estados de sucesso e erro após o login
      setSuccess("Login successful");
      setError("Incorrect Email or Password. Please try again!");
    } catch (error) {
      console.error("Login Failed:", error);

      // Lidando com diferentes cenários de erro durante o login
      if (error.response && error.response.status === 401) {
        setError("Incorrect Email or Password. Please try again!");
      } else {
        setError("An error occurred during login. Please try again later.");
      }
    } finally {
      // Configurando o estado de carregamento ao finalizar o login
      setLoading(false);
    }
  };

  // Efeito colateral para lidar com pressionar a tecla Enter
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleLogin(e);
      }
    };
    document.addEventListener("keypress", handleKeyPress);

    // Removendo o ouvinte de evento ao desmontar o componente
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleLogin]);

  // Renderização do componente
  return (
    <>
      <div className="bg text-white">
        <div className="container-main d-flex justify-content-center align-items-center mt-4 mb-5">
          <div className="title-form rounded-2 d-flex flex-column align-items-center gap-5 p-4">
            <h3 className="login mt-4">LOGIN</h3>

            {/* Formulário de login */}
            <form className="container-box d-flex gap-5">
              <input
                type="text"
                name="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required={true}
              />
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Password"
                  required={true}
                />
                {/* Ícone de olho para alternar a visibilidade da senha */}
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "45%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    background: "transparent",
                  }}
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} color="#fff" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      color="#fff"
                      style={{ opacity: 0.7 }}
                    />
                  )}
                </span>
              </div>
              {/* Exibindo mensagem de erro se houver */}
              {error && (
                <p style={{ color: "red" }}>
                  {error
                    ? "Incorrect Email or Password. Please try again!"
                    : ""}
                </p>
              )}
              {/* Botão de login */}
              <button
                onClick={handleLogin}
                className="btn btn-lg rounded-2"
                type="button"
              >
                {loading ? "Signing In..." : "SIGN IN"}
              </button>
            </form>

            {/* Link para a página de registro */}
            <Link
              to="/sign-up"
              className="link-signup text-decoration-none mb-5"
            >
              Don&apos;t have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Exportando o componente Login
export default Login;
