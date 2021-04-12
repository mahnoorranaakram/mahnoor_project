import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import IwaysLogo from "../../../resources/images/logos/iways-logo.png";

class Footer extends Component {
    render() {
        const {
            classes
            } = this.props;

            const langList = [
                {
                    title: "Deutsch"
                },
                {
                    title: "English US"
                },
                {
                    title: "Italiano"
                },
                {
                    title: "Italiano"
                },
                {
                    title: "Français"
                },
                {
                    title: "Português"
                },
                {
                    title: "русский"
                },
                {
                    title: "中文"
                }
            ]
        return (
            <div className={classes.footerwrapper}>
                {
                    langList.map((item, index) => (
                        <Button>{item.title}</Button>
                    ))
                }

                <div className={classes.footerlinks}>
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

                    <div className={classes.footerlogowrrapper}>
                        <div className={classes.footerlogo}>
                            <span>powered by</span>
                            <img src={IwaysLogo} alt="Iways Logo" />
                        </div>
                    </div>
            </div>
        )
    }
}

export default withStyles(styles)(Footer);