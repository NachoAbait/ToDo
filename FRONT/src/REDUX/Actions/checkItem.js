export function checkItem(item) {
  return async function (dispatch) {
    return dispatch({
      type: "CHECK_ITEM",
      payload: item,
    });
  };
}
