import axios from "axios";

export function getTasks() {
  return async function (dispatch) {
    console.log("estoy en la action");
    const tasks = await axios.get("/tasks");

    console.log("estas son las tasks:");
    console.log(tasks);
    return dispatch({
      type: "GET_TASKS",
      payload: tasks.data,
    });
  };
}

export default getTasks;
