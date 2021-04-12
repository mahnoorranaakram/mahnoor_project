export const SIGNUP = {
    data: {
        submitLogin: {
            result: {},
            request: {
                required: false,
                url: "login",
                params: {
                    grant_type: "password",
                    scope: "webclient"
                },
                method: "post"
            },
            error: {}
        },
    },
    forms: {
        signupForm: {
            fields: {
                FirstNameField: {
                    label: "First Name",
                    name: "FirstNameField",
                    placeholder: "Vorname",
                    value: ""
                },
                LastNameField: {
                    label: "Last Name",
                    name: "LastNameField",
                    placeholder: "Nachname",
                    value: ""
                },
                PasswordField: {
                    label: "Password",
                    name: "PasswordField",
                    placeholder: "Passwort eingeben",
                    value: ""
                },
                ConfirmPasswordField: {
                    label: "Confirm Password",
                    name: "ConfirmPasswordField",
                    placeholder: "Passwort Wiederholen",
                    value: ""
                }
            }
        }
    },
    UISetting: {
        isSignUp: false,
        error: "",
    }
};

export default SIGNUP;