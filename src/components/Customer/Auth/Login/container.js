import { connect } from "react-redux";
import LoginPage from "./component";
import {
    textFieldChangeHandler,
    submitFormHandler
} from "./actions";

const mapStateToProps = state => ({
    fields: state.LOGIN.forms.loginForm.fields,
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e));
    },
    submitFormHandler: (EmailField, PasswordField) => {
        let data = {
                "Email": EmailField,
                "Password": PasswordField
        }
        dispatch(submitFormHandler(data));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    submitFormHandler: () => {
        dispatchProps.submitFormHandler(stateProps.fields.EmailField.value, stateProps.fields.PasswordField.value)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LoginPage);