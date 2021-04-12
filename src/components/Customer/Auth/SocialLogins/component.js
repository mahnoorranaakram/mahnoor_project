import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class SocialLogin extends Component {

    SubmitHandler = () => {
        this.props.submitFormHandler()
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
                <>
                    <span className={classes.sociallogintitle}>oder weiter mit</span>
                    <div className={classes.socialbtnwrapper}>
                        <Button color="primary" variant="outlined" className={classes.googlebtn}>Google</Button>
                        <Button color="primary" variant="outlined" className={classes.facebookbtn}>Facebook</Button>
                    </div>

                    <div className={classes.authfooterwrapper}>
                        <NavLink
                            to={'/'}
                        >
                            Über Uns
                        </NavLink>
                        <NavLink
                            to={'/'}
                        >
                            Datenschutzerklärung
                        </NavLink>
                        <NavLink
                            to={'/'}
                        >
                            Impressum
                        </NavLink>
                    </div>
                </>
        )
    }
}

export default withStyles(styles)(SocialLogin);