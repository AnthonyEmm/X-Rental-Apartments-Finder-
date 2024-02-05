// Importando estilos Bootstrap e estilos específicos do componente ContactForm
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/contactForm.css";

// Importando FontAwesome para ícone de envelope
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Importando React, useRef, useState, useEffect
import React, { useRef, useState, useEffect } from "react";

// Importando a biblioteca de envio de e-mail (emailjs)
import emailjs from "@emailjs/browser";

// Importando componentes da biblioteca de notificações (react-toastify)
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importando o hook useNavigate do React Router para navegação programática
import { useNavigate } from "react-router-dom";

// Importando o componente TypeAnimation para animação de texto digitado
import { TypeAnimation } from "react-type-animation";

// Componente ContactForm responsável pelo formulário de contato
const ContactForm = () => {
  // Hook useNavigate para navegação programática
  const navigate = useNavigate();

  // Referência para o formulário
  const form = useRef();

  // Função para enviar e-mail
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39d8p2b",
        "template_ptoue0r",
        form.current,
        "aU8koTSpQeqGZD8Wz"
      )
      .then(
        (result) => {
          // Redirecionando para a página inicial após o envio bem-sucedido
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Função para exibir notificação de sucesso
  const notify = () => {
    toast.success("Email sent Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // Condicional para a largura da janela (media query para TypeAnimation)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Estilo condicional para o texto do TypeAnimation
  const textStyle =
    windowWidth < 768
      ? {
          fontSize: "1.1rem",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          textAlign: "justify",
          marginBottom: "2rem",
        }
      : {
          fontSize: "1.6rem",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          textAlign: "justify",
          marginBottom: "2rem",
        };

  // Renderização do componente ContactForm
  return (
    <div className="bg">
      {/* Componente TypeAnimation para animação de texto digitado */}
      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)}
        sequence={[`Write us a message. We'll be glad!`, 1000, ""]}
        speed={{ type: "keyStrokeDelayInMs", value: 100 }}
        repeat={Infinity}
        omitDeletionAnimation={true}
        style={textStyle}
      />

      <div className="container mt-2 mb-4 text-success">
        {/* Cabeçalho do formulário de contato */}
        <div className="head d-flex justify-content-center align-items-center gap-3 mt-3 mb-4">
          <h2>CONTACT FORM</h2>
          {/* Ícone de envelope FontAwesome */}
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "2rem", color: "rgb(17, 189, 74)" }}
            />
          </div>
        </div>

        {/* Formulário de contato */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form d-flex flex-column gap-2 mb-3"
        >
          <label className="form-label">Name</label>
          <input type="text" name="user_name" required className="user-name" />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="user-email mb-1"
          />
          <label className="form-label">Message</label>
          <textarea
            id="message"
            rows="5"
            cols="30"
            name="message"
            className="form-control mb-4"
            required
          />
          {/* Botão de envio do formulário */}
          <input
            onClick={notify}
            type="submit"
            value="SEND"
            className="btn-send btn btn-lg rounded-2 mb-5"
          />

          {/* Componente ToastContainer para notificações */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  );
};

// Exportando o componente ContactForm
export default ContactForm;
