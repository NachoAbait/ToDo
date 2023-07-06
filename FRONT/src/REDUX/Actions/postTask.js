import axios from "axios";

export function postTask(payload) {
  return async function (dispatch) {
    console.log("estoy en la action");
    const task = await axios.post("/task", payload);
    console.log(task.data);
    return dispatch({
      type: "POST_TASK",
      payload: task.data,
    });
  };
}

export default postTask;
