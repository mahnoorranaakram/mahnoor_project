import { LOGIN } from "../components/Customer/Auth/Login/initialState";
import { SIGNUP } from "../components/Customer/Auth/SignUp/initialState";
import { ARTICLE_DATA } from "../components/Customer/ArticleData/initialState";
import { ALERT_DIALOG } from "../components/common/ReduxBased/confirmationDialog/initialState";
import { EAN_ENTRY } from "../components/Customer/EAN/EANEntry/initialState";
import { LIST_VIEW } from "../components/Customer/ListView/initialState";
import { TABLE_LIST_VIEW } from "../components/Customer/ListView/TableListView/initialState";

const initalState = {
  LOGIN: LOGIN,
  SIGNUP: SIGNUP,
  ARTICLE_DATA: ARTICLE_DATA,
  ALERT_DIALOG: ALERT_DIALOG,
  EAN_ENTRY: EAN_ENTRY,
  LIST_VIEW: LIST_VIEW,
  TABLE_LIST_VIEW: TABLE_LIST_VIEW,
};

export default initalState;
