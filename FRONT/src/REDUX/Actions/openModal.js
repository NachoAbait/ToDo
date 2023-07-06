export function openModal() {
  return async function (dispatch) {
    return dispatch({
      type: "OPEN_MODAL",
      payload: "",
    });
  };
}
