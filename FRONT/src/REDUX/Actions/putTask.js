import axios from "axios";

export function putTask() {
  return async function (dispatch) {
    console.log("estoy en la action");
    const task = await axios.put(`http://localhost:3001/task/${id}`);

    return dispatch({
      type: "PUT_TASK",
      payload: task.data,
    });
  };
}

export default putTask;
