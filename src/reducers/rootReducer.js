import { loginReducer } from "../components/Customer/Auth/Login/loginReducer";
import { signupReducer } from "../components/Customer/Auth/SignUp/signupReducer";
import { artcleDataReducer } from "../components/Customer/ArticleData/articleDataReducer";
import { listViewReducer } from "../components/Customer/ListView/listViewReducer";
import { confirmationDialogReducer } from "../components/common/ReduxBased/confirmationDialog/confirmationDialogReducer";
import { EANReducer } from "../components/Customer/EAN/EANEntry/EANReducer";
import {tableListReducer} from "../components/Customer/ListView/TableListView/tablelistReducer"
import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

const rootReducer = reduceReducers(
  combineReducers({
    LOGIN: loginReducer,
    SIGNUP: signupReducer,
    ARTICLE_DATA: artcleDataReducer,
    EAN_ENTRY: EANReducer,
    ALERT_DIALOG: confirmationDialogReducer,
    LIST_VIEW: listViewReducer,
    TABLE_LIST_VIEW:tableListReducer
  })
);

export default rootReducer;
