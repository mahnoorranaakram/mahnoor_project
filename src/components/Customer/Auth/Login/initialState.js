export const LOGIN = {
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
        loginForm: {
            fields: {
                EmailField: {
                    label: "Email",
                    name: "EmailField",
                    placeholder: "Email-Adresse",
                    value: ""
                },
                PasswordField: {
                    label: "Password",
                    name: "PasswordField",
                    placeholder: "Passwort",
                    value: ""
                }
            }
        }
    },
    UISetting: {
        isLogin: false,
        loginMessage: ""
    }
};

export default LOGIN;