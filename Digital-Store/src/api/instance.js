import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com", // URL base para todas as requisições
    timeout: 5000, // Tempo limite para as requisições
    headers: {
      "Content-Type": "application/json", // Tipo de conteúdo padrão
    },
  });

  export default api;

  api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro na resposta da API:", error);
        return Promise.reject(error)
        
    }
  );
