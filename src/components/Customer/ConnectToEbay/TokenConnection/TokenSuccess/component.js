import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

class TokenSuccess extends Component {
  render() {
    const {
      classes,
      displayStateHandler,
      displayStateHandlerToken,
    } = this.props;
    return (
      <div className={classes.infowrappertokenconnect}>
        <p className="titletokenconnect">
          Dein Token wurde erstellt.Bitte annehmen!
        </p>
        <div className={classes.mainwrappertokenconnect}>
          <CheckCircleOutlineIcon style={{ fontSize: 120, color: "#22AF47" }} />
          <Button
            className="buttontokenconnect"
            variant="contained"
            color="primary"
            onClick={() => displayStateHandlerToken(2)} //for listing sucess
          >
            Jetzt Token annehmen
          </Button>
        </div>
        <div className={classes.infofootertokenconnect}>
          <span onClick={() => displayStateHandler(1)}>What is token?</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TokenSuccess);
