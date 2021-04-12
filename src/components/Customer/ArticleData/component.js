import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button  } from "@material-ui/core";
import Header from "../../common/Header/container";
import Footer from "../../common/Footer/container";
import ArticleSidebar from "./Sidebar/container";
import ArticleListing from "./Listing/container";
import ArticlePhotos from "./Photos/container";
import ArticleCharacteristics from "./Characteristics/container";
import ArticleDescription from "./Description/container";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { NavLink } from "react-router-dom";
import { ValidatorForm } from "react-material-ui-form-validator";
import EANEntryPage from "../EAN/EANEntry/container";
import ConnectToEbay from "../ConnectToEbay/container";
import AlertDialog from "../../common/ReduxBased/confirmationDialog/container";

class ArticleData extends Component {

    state = {
        show: false,
        showEbayConnect: false
      };

    SubmitHandler = () => {

    }
    

    showAlertDialog = (value) => {
        this.setState({ show: value });
    };

    showEbayAlertDialog = (value) => {
        this.setState({
            showEbayConnect: value
        })
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
                <>
                    <Header />
                    
                    <Grid container>
                        <Grid item className={classes.leftsidebar} xs={12} md={4} lg={3}>
                            <ArticleSidebar />
                        </Grid>

                        <Grid item  xs={12} md={8} lg={9}>
                            <div className={classes.eannumber}>
                                <span>Artikeldaten basierend auf</span>
                                <NavLink
                                    to={'/'}
                                >
                                    EAN 10022009369
                                    <ArrowRight />
                                </NavLink>
                            </div>
                            <div className={classes.rightcontent}>
                            <ValidatorForm
                                onSubmit={this.SubmitHandler}
                                autoComplete="off"
                            >
                                <ArticleListing />
                                <ArticlePhotos />
                                <ArticleCharacteristics />
                                <ArticleDescription />

                                <Button className={classes.submitbutton} color="primary" variant="contained">Artikel jetzt listen</Button>
                            </ValidatorForm>
                            </div>
                        </Grid>
                    </Grid>

                        

                    
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.showAlertDialog(true)}
                        >
                            New Entry
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.showEbayAlertDialog(true)}
                        >
                            Connect To Buy
                        </Button>

                        {
                            this.state.show &&
                            <AlertDialog
                                customClass={classes.dialog}
                                alertClass={true}
                                maxWidth={"sm"}
                                open={this.state.show}
                                showTitle={false}
                                hideApplyButton={true}
                                hideCancelButton={true}
                                message={<EANEntryPage isPopup={true} showAlertDialog={this.showAlertDialog} />}
                                applyButtonText={"Done"}
                                cancelAlertDialog={() => this.showAlertDialog(false)}
                                closeAlertDialog={() => this.showAlertDialog(false)}
                                applyAlertDialog={() => this.showAlertDialog(false)}
                            />
                        }

                        {
                            this.state.showEbayConnect &&
                            <AlertDialog
                                customClass={classes.dialog}
                                alertClass={true}
                                maxWidth={"sm"}
                                open={this.state.showEbayConnect}
                                showTitle={false}
                                hideApplyButton={true}
                                hideCancelButton={true}
                                message={<ConnectToEbay isPopup={true} showAlertDialog={this.showEbayAlertDialog} />}
                                applyButtonText={"Done"}
                                cancelAlertDialog={() => this.showEbayAlertDialog(false)}
                                closeAlertDialog={() => this.showEbayAlertDialog(false)}
                                applyAlertDialog={() => this.showEbayAlertDialog(false)}
                            />
                        }

                    <Footer />
                </>
        )
    }
}

export default withStyles(styles)(ArticleData);