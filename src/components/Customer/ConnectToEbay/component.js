import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import TokenInfo from "./TokenInfo/component";
import TokenConnection from "./TokenConnection/component";

class ConnectToEbay extends Component {
  state = {
    display: 0,
  };

  displayStateHandler = (e) => {
    this.setState({ display: e });
  };
  render() {
    const { classes, isPopup, showAlertDialog } = this.props;
    const { display } = this.state;

    return (
      <>
        {isPopup ? (
          <div className={classes.closebtn}>
            <ClearIcon onClick={() => showAlertDialog(false)} />
          </div>
        ) : (
          ""
        )}
        {display === 1 ? (
          <TokenInfo displayStateHandler={this.displayStateHandler} />
        ) : display === 0 ? (
          <TokenConnection displayStateHandler={this.displayStateHandler} />
        ) : 
        null}
      </>
    );
  }
}

export default withStyles(styles)(ConnectToEbay);
