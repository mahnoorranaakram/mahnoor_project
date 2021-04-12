import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import SuccessBox from "../../../../../resources/images/Auth/success-box.png";
import { Button } from "@material-ui/core";

class ListingSuccess extends Component {
  render() {
    const { classes, displayStateHandlerToken } = this.props;
    return (
      <div className={classes.infowrapperlist}>
        <p className="titletokenconnect">Listing erfolgreich!</p>
        <div className={classes.mainwrapperlist}>
          <img src={SuccessBox} alt=""  className="listingboximg"/>
          <Button
            className="buttonlist"
            variant="outlined"
            color="primary"
            type="submit"
          >
            Listing beenden
          </Button>
          <Button
            className="buttonlist"
            variant="contained"
            color="primary"
          >
            Weiteren Artikel Listen
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ListingSuccess);
