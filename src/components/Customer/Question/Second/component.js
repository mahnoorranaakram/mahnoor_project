import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../../common/Header/container";
import BoxImg from "../../../../resources/images/Auth/Boxes with Place Icon.png";
import FirstBoxImg from "../../../../resources/images/Auth/Single Box Picture.png";
import SecondBoxImg from "../../../../resources/images/Auth/Multiple Boxes picture.png";
import { NavLink } from "react-router-dom";
import Footer from "../../../common/Footer/container";

class SecondQuestion extends Component {

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
                    <span className="count" >2</span>
                    <span className="title">Was möchtest du tun?</span>
                </div>

                <div className={classes.selectionwrapper}>
                    <div className="box">
                        
                        <img src={FirstBoxImg} alt="" />
                        <span>Einzelne Artikel</span>
                        <NavLink
                            to={'/ean'}
                        >
                            Wahlen
                        </NavLink>
                    </div>

                    <div className="box">
                        
                        <img src={SecondBoxImg} alt="" />
                        <span>Bulkupload - csv</span>
                        <NavLink
                            to={'/ean'}
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

export default withStyles(styles)(SecondQuestion);