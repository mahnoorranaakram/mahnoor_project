import {
    ARTICLE_DATA_PAGE_TEXT_CHANGE_HANDLER,
    ARTICLE_PHOTO_EDIT_HIDE_HANDLER
} from "./actions";

export const artcleDataReducer = (state = [], action) => {
    switch (action.type) {
        
        case ARTICLE_PHOTO_EDIT_HIDE_HANDLER: {
            return {
                ...state,
                UISetting: {
                    ...state.UISetting,
                    addEditPhoto: true
                }
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
};