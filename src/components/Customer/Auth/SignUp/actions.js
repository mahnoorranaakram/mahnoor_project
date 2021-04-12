export const SIGNUP_PAGE_TEXT_CHANGE_HANDLER = "SIGNUP_PAGE_TEXT_CHANGE_HANDLER";
export const SIGNUP_CORRECTLY_PAGE_HANDLER = "SIGNUP_CORRECTLY_PAGE_HANDLER";
export const SIGNUP_PAGE_ERROR_HANDLER = "SIGNUP_PAGE_ERROR_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: SIGNUP_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const signUpCorrectlyHandler = (value) => dispatch => {
    dispatch({
        type: SIGNUP_CORRECTLY_PAGE_HANDLER,
        payload: value,
    });
};

export const setErrorHandler = (value) => dispatch => {
    dispatch({
        type: SIGNUP_PAGE_ERROR_HANDLER,
        payload: value,
    });
};