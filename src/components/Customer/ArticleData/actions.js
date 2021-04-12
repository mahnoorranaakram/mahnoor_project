export const ARTICLE_DATA_PAGE_TEXT_CHANGE_HANDLER = "ARTICLE_DATA_PAGE_TEXT_CHANGE_HANDLER";
export const ARTICLE_PHOTO_EDIT_HIDE_HANDLER = "ARTICLE_PHOTO_EDIT_HIDE_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: ARTICLE_DATA_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const isEditPhotoHandler = () => dispatch => {
    dispatch({
        type: ARTICLE_PHOTO_EDIT_HIDE_HANDLER,
    });
};