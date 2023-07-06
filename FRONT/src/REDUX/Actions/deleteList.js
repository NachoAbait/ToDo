export function deleteList(id) {
  return async function (dispatch) {
    console.log("en la action delete");
    console.log(id);
    return dispatch({
      type: "DELETE_LIST",
      payload: id,
    });
  };
}
