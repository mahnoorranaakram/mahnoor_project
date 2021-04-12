import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../../common/Header/container";
import Footer from "../../../common/Footer/component";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "../../../common/ReduxBased/CustomTextValidator/component";
import ClearIcon from "@material-ui/icons/Clear";
import CameraEntranceIcon from "@material-ui/icons/CameraEnhance"
import AlertDialog from "../../../common/ReduxBased/confirmationDialog/container";

import ScanNumber from "../ScanCode/container";

class EANEntryPage extends Component {

  state = {
    openScanDialog: false
  }

  submitFormHandler = () => {
    window.location.replace('/article')
  }

  showScanDialogHandler = (value) => {
    this.setState({
      openScanDialog: value
    })
  }

  render() {
    const {
      classes,
      textFieldChangeHandler,
      fields,
      isPopup,
      showAlertDialog
    } = this.props;

    const {
      openScanDialog
    } = this.state;

    return (
      <div>
        {isPopup ? null : <Header /> } 
        <Grid container className={isPopup ? classes.containerwithoutbg : classes.EANContainer} justify="center">
          <Grid item xs={12} md={isPopup ? 12 : 6} className={isPopup ? "" : classes.contentwrapper}>
            <div className={isPopup ? "" : classes.eanEntryBox}>
              {
                isPopup ? 
                <div className={classes.closebtn}>
                  <ClearIcon onClick={() => showAlertDialog(false)} />
                </div> : 
                ""
              }
              <Typography noWrap className={classes.eanHeading}>
                EAN des Artikels wird benätigt
              </Typography>
              <ValidatorForm autoComplete="off" onSubmit={this.submitFormHandler}>
                <div className={classes.fieldwithicon}>
                <CustomTextValidator
                  validations={true}
                  fullWidth={true}
                  type="text"
                  placeholder={fields.EANField.placeholder}
                  name={fields.EANField.name}
                  value={fields.EANField.value}
                  onChange={value => {
                    textFieldChangeHandler(
                      fields.EANField.name,
                      value
                    );
                  }}
                  validators={["required"]}
                  errorMessages={["Required"]}
                  className={classes.textfield}
                />
                <div className="icon" >
                  <div onClick={() => this.showScanDialogHandler(true)}>
                    <span>scan</span>
                    <CameraEntranceIcon />
                  </div>
                  {
                    openScanDialog && 
                    <AlertDialog
                        maxWidth={"xs"}
                        open={openScanDialog}
                        showTitle={false}
                        hideApplyButton={true}
                        message={<ScanNumber showScanDialogHandler={this.showScanDialogHandler}/>}
                        applyButtonText={"Done"}
                        cancelAlertDialog={() => this.showScanDialogHandler(false)}
                        closeAlertDialog={() => this.showScanDialogHandler(false)}
                        applyAlertDialog={() => this.showScanDialogHandler(false)}
                    />
                  }
                </div>
                </div>
                

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitbtn}
                  endIcon={<TrendingFlatIcon />}
                  type="submit"
                >
                  Artikeldaten laden
              </Button>

              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
        { isPopup ? null : <Footer />}
      </div>
    );
  }
}

export default withStyles(styles)(EANEntryPage);
