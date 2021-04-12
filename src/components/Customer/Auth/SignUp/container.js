import { connect } from "react-redux";
import SignUpPage from "./component";
import {
    textFieldChangeHandler,
    signUpCorrectlyHandler,
    setErrorHandler
} from "./actions";
import instance, {BASE_URL} from "../../../../api/config";

const mapStateToProps = state => ({
    fields: state.SIGNUP.forms.signupForm.fields,
    isSignUp: state.SIGNUP.UISetting.isSignUp,
    error: state.SIGNUP.UISetting.error
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e));
    },
    submitSignUpHandler: (FirstName, LastName, Password, ConfirmPassword) => {
        let data = {
            FirstName: FirstName,
            LastName: LastName,
            Password: Password,
            ConfirmPassword: ConfirmPassword
        }
        
        instance.post(BASE_URL+'Reg', data)
        .then(res => {
            if(res.data.statusCode === 404) {
                dispatch(setErrorHandler(res.data.error));
                dispatch(signUpCorrectlyHandler(false))
            }else {
                dispatch(setErrorHandler(""));
                dispatch(signUpCorrectlyHandler(true))
            }
        })
        .catch(error => {
            dispatch(signUpCorrectlyHandler(false))
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    submitSignUpHandler: () => {
        dispatchProps.submitSignUpHandler(stateProps.fields.FirstNameField.value, stateProps.fields.LastNameField.value, stateProps.fields.PasswordField.value, stateProps.fields.ConfirmPasswordField.value);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SignUpPage);