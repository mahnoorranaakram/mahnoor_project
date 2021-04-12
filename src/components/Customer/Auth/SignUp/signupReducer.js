import {
    SIGNUP_PAGE_TEXT_CHANGE_HANDLER,
    SIGNUP_CORRECTLY_PAGE_HANDLER,
    SIGNUP_PAGE_ERROR_HANDLER
} from "./actions";

export const signupReducer = (state = [], action) => {
    switch (action.type) {
        case SIGNUP_PAGE_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    signupForm: {
                        ...state.forms.signupForm,
                        fields: {
                            ...state.forms.signupForm.fields,
                            [action.key]: {
                                ...state.forms.signupForm.fields[action.key],
                                ...action.payload
                            }
                        }
                    }
                }
            };
        }

        case SIGNUP_CORRECTLY_PAGE_HANDLER: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    isSignUp: action.payload
                }
            };
        }

        case SIGNUP_PAGE_ERROR_HANDLER: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    error: action.payload
                }
            };
        }
        
        default: {
            return {
                ...state
            };
        }
    }
};