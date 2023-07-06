export function closeModal2() {
  return async function (dispatch) {
    return dispatch({
      type: "CLOSE_MODAL2",
      payload: "",
    });
  };
}
