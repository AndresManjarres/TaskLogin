import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import PropTypes from 'prop-types';

import Cookie from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthContext");
  }
  return context;
}

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message])
    }
  };

  //Funcion para borrar datos despues de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer); //limpia el timer para no gastar en renderizado
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {

      const cookieHere = Cookie.get();

      if (!cookieHere.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookieHere.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        } 
        

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);

      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
}, []);

return (
  <AuthContext.Provider
    value={{
      signup,
      signin,
      loading,
      user,
      isAuthenticated,
      errors,
    }}
  >
    {children}
  </AuthContext.Provider>
);
};

//Se define el tipo de dato que se espera recibir en el children SUGERIDO POR EL "GEPETO"
AuthProvider.propTypes = {
  children: PropTypes.node // Validación de 'children' como nodo de React
};

export default AuthProvider;