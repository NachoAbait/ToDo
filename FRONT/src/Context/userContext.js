import React, { createContext, useState, useContext, useEffect } from "react";
import createUser from "../REDUX/Actions/createUser.js";
import { useDispatch, useSelector } from "react-redux";
import login from "../REDUX/Actions/login.js";
import Cookies from "js-cookies";

// Crea el contexto de usuario
export const UserContext = createContext();

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Crea el componente proveedor que almacenará y proporcionará los datos del usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  // Función para establecer los datos del usuario una vez que se haya registrado
  const signup = (userData) => {
    dispatch(createUser(userData))
      .then(() => {
        setUser(userData);
      })
      .catch((error) => {
        // Error en la creación del usuario
        if (error.response && error.response.status === 409) {
          // Si el estado de respuesta es 409 (Conflict)
          alert("User already exists");
        } else {
          // Otros errores
          alert(error);
        }
      });
  };

  // Función para iniciar sesión
  const signin = async (userData) => {
    await dispatch(login(userData))
      .then((response) => {
        setUser(response);
        console.log("datauser");
        console.log(userData);
      })
      .catch((error) => {
        // Error en la creación del usuario
        alert(error);
      });
  };

  // Función para eliminar los datos del usuario al cerrar sesión
  const logout = () => {
    setUser(null);
  };

  // Verificar si hay un token vigente para mantener los datos del usuario
  useEffect(() => {
    const cookies = Cookies.get();
    console.log("estas son las cookies");
    console.log(cookies);
    if (cookies.token) {
      console.log(cookies.token);
    }
  }, []);

  // Proporciona el estado 'user', las funciones  signup' y 'logout' a través del contexto
  return (
    <UserContext.Provider value={{ user, signup, signin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Exporta el contexto de usuario
export default UserContext;
