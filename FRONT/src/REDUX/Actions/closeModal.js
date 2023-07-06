export function closeModal() {
  return async function (dispatch) {
    return dispatch({
      type: "CLOSE_MODAL",
      payload: "",
    });
  };
}
