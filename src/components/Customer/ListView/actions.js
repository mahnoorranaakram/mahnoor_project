export const LIST_VIEW = "LIST_VIEW";

export const listViewChangeHandler = () => (dispatch) => {
  dispatch({
    type: LIST_VIEW,
  });
};
