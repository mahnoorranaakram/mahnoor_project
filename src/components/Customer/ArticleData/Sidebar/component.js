import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

class ArticleSidebar extends Component {
    render() {
        const {
            classes,
        } = this.props;

        return (
                <div className={classes.sidebarwrapper}>
                    <div className={classes.accountinfowrapper}>
                        <div className="type">
                            <span className="title">FREE ACCOUNT</span>
                            <span>3/10 Listings</span>
                        </div>
                        <h1 className="email">svk@i-ways.net</h1>
                        <span className="name">Silvio von Krüchten</span>
                    </div>

                    <div className={classes.navlinkswrapper}>
                        <NavLink
                            to={'/article'}
                            hash="#listing"
                        >
                            Listinginformation
                        </NavLink>
                        <NavLink
                            to={'/article'}
                            hash="#photos"
                        >
                           Produktfotos (5/12)
                        </NavLink>
                        <NavLink
                            to={'/article#characteristice'}
                        >
                            Artikelmerkmale
                        </NavLink>
                        <NavLink
                            to={'/article#listing'}
                        >
                            Artikelbeschreibung
                        </NavLink>
                    </div>
                </div>
        )
    }
}

export default withStyles(styles)(ArticleSidebar);