export function openModal2() {
  return async function (dispatch) {
    return dispatch({
      type: "OPEN_MODAL2",
      payload: "",
    });
  };
}
