import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

import truckImg from "../../../../resources/images/Auth/Truck Picture.png";
import boxImg from "../../../../resources/images/Auth/Boxes with Place Icon.png"
import { NavLink } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ClearIcon from "@material-ui/icons/Clear";

class AuthLanding extends Component {

    state = {
        showNav: false
    }

    showNavHandler = () => {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    NavElement = () => {
        return (
            <div className={this.props.classes.authmenuwrapper}>
                <NavLink
                    to={'/login'}
                >
                    Login
                </NavLink>
                <NavLink
                    to={'/register'}
                >
                    NEukunde
                </NavLink>
            </div>
        )
    }

    render() {
        const {
            classes,
        } = this.props;

        const {
            showNav
        } = this.state;

        return (
            <>
                <div className={classes.authlandingwrapper}>
                    <this.NavElement />
                    <div className={classes.welcometextwrapper}>
                        <span className="top">Willkommen zum</span>
                        <div className="bottom">
                            <span className="left">Einfaches Listen und Export ihrer Artikel auf einen Schlag</span>
                            <span className="right">LISTING TOOL</span>
                        </div>

                        <div className={classes.authimgwrapper}>
                            <img src={truckImg} className="truck" alt="Trcuk Picture" />
                            <img src={boxImg} className="box" alt="Boxes with Place Icon" />
                        </div>
                    </div>
                </div>

                <div className={classes.mobilenavwrapper}>
                    {
                        showNav ? <ClearIcon onClick={this.showNavHandler}/> : <MoreVertIcon onClick={this.showNavHandler}/> 
                    }
                    {
                        showNav ? 
                        <div className="mobilelinks">
                            <this.NavElement />
                        </div> : ""
                    }
                </div>
            </>
        )
    }
}

export default withStyles(styles)(AuthLanding);