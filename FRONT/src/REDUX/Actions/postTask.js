import axios from "axios";

export function postTask(payload, token) {
  return async function (dispatch) {
    console.log("estoy en la action");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const task = await axios.post("/task", payload, config);
    console.log(task.data);
    return dispatch({
      type: "POST_TASK",
      payload: task.data,
    });
  };
}

export default postTask;
