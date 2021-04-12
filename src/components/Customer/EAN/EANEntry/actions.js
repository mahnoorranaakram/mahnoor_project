export const EAN_ENTRY_PAGE_HANDLER = "EAN_ENTRY_PAGE_HANDLER";
export const ENTER_EAN_PAGE_TEXT_CHANGE_HANDLER = "ENTER_EAN_PAGE_TEXT_CHANGE_HANDLER";

export const entryFieldChangeHandler = () => dispatch => {
    dispatch({
        type: EAN_ENTRY_PAGE_HANDLER,
        payload: '',
        key: ''
    });
};

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: ENTER_EAN_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};