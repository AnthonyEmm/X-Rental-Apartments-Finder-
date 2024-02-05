// Importando a biblioteca axios para fazer requisições HTTP
import axios from "axios";

// Criando uma instância do cliente axios com configurações personalizadas
const axiosClient = axios.create({
  // Configurando a URL base para todas as requisições
  // Utilizando a variável de ambiente VITE_BE_URL ou uma string vazia se não estiver definida
  baseURL: `${import.meta.env.VITE_BE_URL || ""}/api`,
  
  // Indicando que as credenciais devem ser incluídas nas requisições
  withCredentials: true,
});

// Exportando a instância do cliente axios para ser utilizada em outros lugares da aplicação
export default axiosClient;
