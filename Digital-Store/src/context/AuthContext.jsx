import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuthState] = useState(false);

    // Função para salvar o estado no localStorage
    const setAuth = (value) => {
      setAuthState(value);
      localStorage.setItem("auth", JSON.stringify(value));
    };
  
    // Recuperar o estado do localStorage quando o app carrega
    useEffect(() => {
      const storedAuth = JSON.parse(localStorage.getItem("auth"));
      if (storedAuth) {
        setAuthState(storedAuth);
      }
    }, []);
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider