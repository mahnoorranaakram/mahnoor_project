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

class LoginPage extends Component {

    SubmitHandler = () => {
        window.location.replace('/first-question')
        this.props.submitFormHandler()
    }

    render() {
        const {
            classes,
            fields,
            textFieldChangeHandler,
            isLogin,
            error,
        } = this.props;

        return (
            isLogin ? <Redirect to="/user" /> :
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
                                        <h1 className={classes.logintitle}>Anmeldung</h1>
                                        <ValidatorForm
                                            onSubmit={this.SubmitHandler}
                                            autoComplete="off"
                                        >

                                            <CustomTextValidator
                                                id={fields.EmailField.name}
                                                validations={true}
                                                fullWidth={true}
                                                type="text"
                                                placeholder={fields.EmailField.placeholder}
                                                name={fields.EmailField.name}
                                                value={fields.EmailField.value}
                                                onChange={value => {
                                                    textFieldChangeHandler(
                                                        fields.EmailField.name,
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

export default withStyles(styles)(LoginPage);