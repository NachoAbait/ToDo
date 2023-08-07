import axios from "axios";

export function getTasks(token) {
  return async function (dispatch) {
    console.log("estoy en la action");
    console.log(token)
    const tasks = await axios.get("/tasks", token) ;

    console.log("estas son las tasks:");
    console.log(tasks);
    return dispatch({
      type: "GET_TASKS",
      payload: tasks.data,
    });
  };
}

export default getTasks;
