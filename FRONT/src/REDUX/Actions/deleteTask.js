import axios from "axios";

export function deleteTask(id, token) {
  return async function (dispatch) {
    try {
      console.log("estoy en la action deleteTask");
      console.log(id);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.delete(`/task/${id}`, config);

      return dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      // Puedes manejar el error de acuerdo a tus necesidades,
      // como mostrar un mensaje de error o realizar alguna acción adicional.
    }
  };
}

export default deleteTask;
