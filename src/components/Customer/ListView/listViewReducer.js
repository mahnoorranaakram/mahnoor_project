import { LIST_VIEW } from "./actions";

export const listViewReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_VIEW: {
      return {};
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
