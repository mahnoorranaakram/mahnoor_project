import {
    EAN_ENTRY_PAGE_HANDLER,
    ENTER_EAN_PAGE_TEXT_CHANGE_HANDLER
} from "./actions";

export const EANReducer = (state = [], action) => {
    switch (action.type) {
        case EAN_ENTRY_PAGE_HANDLER: {
            return {
                ...state
            };
        }

        case ENTER_EAN_PAGE_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    EnterEANForm: {
                        ...state.forms.EnterEANForm,
                        fields: {
                            ...state.forms.EnterEANForm.fields,
                            [action.key]: {
                                ...state.forms.EnterEANForm.fields[action.key],
                                ...action.payload
                            }
                        }
                    }
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