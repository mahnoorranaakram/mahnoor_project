import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../../common/Header/container";
import BoxImg from "../../../../resources/images/Auth/Boxes with Place Icon.png";
import FirstBoxImg from "../../../../resources/images/Auth/Shopping Cart Picture.png";
import SecondBoxImg from "../../../../resources/images/Auth/Screen Picture.png";
import { NavLink } from "react-router-dom";
import Footer from "../../../common/Footer/container";

class FirstQuestion extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <>
                <Header />
                <div className={classes.topwrapper}>
                    <div className="left">
                        <span>Mit uns wird Business einfach</span>
                        <h1>Be the Boss at Listing.</h1>
                    </div>
                    <img className="right" src={BoxImg} alt="" />
                </div>

                <div className={classes.navwrapper}>
                    <div className="freetrial">Free Trial
                    <span></span></div>
                    <span className="count" >1</span>
                    <span className="title">Was möchtest du tun?</span>
                </div>

                <div className={classes.selectionwrapper}>
                    <div className="box">
                        <img src={FirstBoxImg} alt="" />
                        <span>Auf eBay listen</span>
                        <NavLink
                            to={'/second-question'}
                        >
                            Wahlen
                        </NavLink>
                    </div>

                    <div className="box">
                        <img src={SecondBoxImg} alt="" />
                        <span>Middleware - Export</span>
                        <NavLink
                            to={'/second-question'}
                        >
                            Wahlen
                        </NavLink>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}

export default withStyles(styles)(FirstQuestion);