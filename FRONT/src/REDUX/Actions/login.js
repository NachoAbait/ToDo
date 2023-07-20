import axios from "axios";
import { closeModal } from "./closeModal.js";

const login = (userData) => {
  return (dispatch) => {
    return axios
      .post("/login", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: headers,
        body: userData,
      })
      .then((response) => {
        // Usuario creado exitosamente
        // Aquí puedes mostrar una alerta o realizar otras acciones
        dispatch(closeModal());
        return response.data; // Puedes devolver cualquier dato necesario
      })
      .catch((error) => {
        // Error en la creación del usuario
        if (error.response && error.response.status === 404) {
          throw new Error("User not found");
        } else if (error.response && error.response.status === 401) {
          throw new Error("Invalid password");
        } else {
          // Otros errores
          // Aquí puedes manejar otros errores de la solicitud
          throw new Error("Error: " + error.message);
        }
      });
  };
};

export default login;
