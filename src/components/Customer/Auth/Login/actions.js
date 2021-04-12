import instance, { BASE_URL } from "../../../../api/config";
import { reverseString } from "../../../common/Helpers";

export const LOGIN_PAGE_TEXT_CHANGE_HANDLER = "LOGIN_PAGE_TEXT_CHANGE_HANDLER";
export const LOGIN_PAGE_ERROR_HANDLER = "LOGIN_PAGE_ERROR_HANDLER";
export const LOGIN_SUBMIT_FORM_HANDLER = "LOGIN_SUBMIT_FORM_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: LOGIN_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const submitFormHandler = (value) => dispatch => {
    let resObj = {};
    let keys_needed = ["access_token", "userText", "userId"];

    instance.post(BASE_URL + 'Login', value)
        .then(res => {
            if (res.data.statusCode === 404) {
                dispatch({
                    type: LOGIN_PAGE_ERROR_HANDLER,
                    payload: res.data.error,
                });
            }
            keys_needed.map(item => {
                resObj[reverseString(item)] = res.data[item];
                return item;
            });
            resObj[reverseString("user_id")] = res.data.userId;
            
            resObj[reverseString("userText")] = res.data.userText ? res.data.userText : res.data.user_name.toUpperCase();
            sessionStorage.setItem(reverseString("app_store"), JSON.stringify(resObj));
            dispatch({
                type: LOGIN_SUBMIT_FORM_HANDLER,
                payload: res.data
            });
            window.location.replace("/user");
        })
        .catch(error => {
        })
}