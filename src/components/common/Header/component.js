import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Logo from "../../../resources/images/logos/iways-logo.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Sidebar from "../SideBar/component";

class Header extends Component {

    state = {
        sidebarOpen: false
    };

    handleDrawerClose = (value) => {
        this.setState({
            sidebarOpen: false
        });
    };

    handleDrawerOpen = () => {
        this.setState({
            sidebarOpen: true
        });
    };

    render() {
        const {
            classes,
        } = this.props;

        const navBarLinks = [
            {
                title: "Mein Konto",
                link: "/mein-konto"
            },
            {
                title: "FAQ",
                link: "/faq"
            },
            {
                title: "Log Out",
                link: "/log-out"
            },
            {
                title: "Upgrade",
                link: "/upgrade",
                isButton: true
            },
        ]

        return (
            <>
                <div className={classes.headerwrapper}>
                    <NavLink
                        to={'/'}
                    >
                        <img src={Logo} className={classes.headerlogo} alt="logo" />
                    </NavLink>

                    <div className={classes.headerlinkswrapper}>
                        <div className="links">
                            {
                                navBarLinks.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className={item.isButton ? "upgradebtn" : ""}
                                    >
                                        {item.title}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <MoreVertIcon onClick={this.handleDrawerOpen} className={classes.sidebarbtn}/>

                <Sidebar open={this.state.sidebarOpen} onClose={this.handleDrawerClose}/>
            </>
        )
    }
}

export default withStyles(styles)(Header);