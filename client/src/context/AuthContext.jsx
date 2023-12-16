import { createContext, useState, useContext} from "react";
import { registerRequest } from '../api/auth';
import PropTypes from 'prop-types';

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

  return (
    <AuthContext.Provider 
    value={{ 
      signup, 
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