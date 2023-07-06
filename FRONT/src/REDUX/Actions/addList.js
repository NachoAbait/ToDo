export function addList(item) {
  return async function (dispatch) {
    console.log("en la action");
    console.log(item);
    return dispatch({
      type: "ADD_LIST",
      payload: item,
    });
  };
}
