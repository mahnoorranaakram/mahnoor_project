import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "../../../common/ReduxBased/CustomTextValidator/component";
import { Redirect, NavLink } from "react-router-dom";
import IwaysLogo from "../../../../resources/images/logos/iways-logo.png";
import SocialLogin from "../SocialLogins/container";
import AuthLanding from "../Landing/container"

class SignUpPage extends Component {

    SubmitHandler = () => {
        this.props.submitFormHandler()
    }

    render() {
        const {
            classes,
            fields,
            textFieldChangeHandler,
            isSignUp,
            error,
            submitandSaveBtn
        } = this.props;

        return (
            isSignUp ? <Redirect to="/user" /> :
                <>
                    <Grid container>
                        <Grid item xs={12} md={7} lg={9} >
                            <AuthLanding />
                        </Grid>

                        <Grid item xs={12} md={5} lg={3}>
                            <Grid container className={classes.loginContainer}>
                                <Grid item xs={12} className="first">

                                        <div className={classes.toplogo}>
                                            <span>powered by</span>
                                            <img src={IwaysLogo} alt="Iways Logo" />
                                        </div>
                                </Grid>

                                <Grid item xs={12} className="second">
                                        <h1 className={classes.logintitle}>Registrierung</h1>
                                        <ValidatorForm
                                            onSubmit={submitandSaveBtn}
                                            autoComplete="off"
                                        >

                                            <CustomTextValidator
                                                id={fields.FirstNameField.name}
                                                validations={true}
                                                fullWidth={true}
                                                type="text"
                                                placeholder={fields.FirstNameField.placeholder}
                                                name={fields.FirstNameField.name}
                                                value={fields.FirstNameField.value}
                                                onChange={value => {
                                                    textFieldChangeHandler(
                                                        fields.FirstNameField.name,
                                                        value
                                                    );
                                                }}
                                                validators={["required"]}
                                                errorMessages={["Required"]}
                                                className={classes.loginfields}
                                            />

                                            <CustomTextValidator
                                                id={fields.LastNameField.name}
                                                validations={true}
                                                fullWidth={true}
                                                type="text"
                                                placeholder={fields.LastNameField.placeholder}
                                                name={fields.LastNameField.name}
                                                value={fields.LastNameField.value}
                                                onChange={value => {
                                                    textFieldChangeHandler(
                                                        fields.LastNameField.name,
                                                        value
                                                    );
                                                }}
                                                validators={["required"]}
                                                errorMessages={["Required"]}
                                                className={classes.loginfields}
                                            />

                                            <CustomTextValidator
                                                id={fields.PasswordField.name}
                                                validations={true}
                                                fullWidth={true}
                                                type="password"
                                                placeholder={fields.PasswordField.placeholder}
                                                name={fields.PasswordField.name}
                                                value={fields.PasswordField.value}
                                                onChange={value => {
                                                    textFieldChangeHandler(
                                                        fields.PasswordField.name,
                                                        value
                                                    );
                                                }}
                                                validators={["required"]}
                                                errorMessages={["Required"]}
                                                className={classes.loginfields}
                                            />

                                            <CustomTextValidator
                                                id={fields.ConfirmPasswordField.name}
                                                validations={true}
                                                fullWidth={true}
                                                type="password"
                                                placeholder={fields.ConfirmPasswordField.placeholder}
                                                name={fields.ConfirmPasswordField.name}
                                                value={fields.ConfirmPasswordField.value}
                                                onChange={value => {
                                                    textFieldChangeHandler(
                                                        fields.ConfirmPasswordField.name,
                                                        value
                                                    );
                                                }}
                                                validators={["required"]}
                                                errorMessages={["Required"]}
                                                className={classes.loginfields}
                                            />
                                            
                                            {
                                                error ? <span className={classes.error}>{error}</span> : null
                                            }
                                                <NavLink to={'/resetpassword'} className={classes.forgetPassword}>Passwort vergessen?</NavLink>
                                                <p className={classes.agbdesc} >Mit Ihrer Anmeldung erklären Sie sich mit unseren
                                                <NavLink
                                                    to={'/'}
                                                >AGB’s
                                                </NavLink>
                                                 einverstanden.</p>

                                            <Button variant="contained" color="primary" type="submit" className={classes.loginSubmitBtn} >
                                                Anmelden
                                        </Button>
                                        </ValidatorForm>
                                </Grid>

                                <Grid item xs={12} className="third">
                                    <SocialLogin />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
        )
    }
}

export default withStyles(styles)(SignUpPage);