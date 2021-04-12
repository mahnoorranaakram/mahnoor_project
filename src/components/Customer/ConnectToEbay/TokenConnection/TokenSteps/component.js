import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

class TokenSteps extends Component {
  render() {
    const { classes, displayStateHandlerToken } = this.props;
    return (
      <div className={classes.infostep}>
        <div className="firststep">
          <p
            className={
              displayStateHandlerToken === 0
                ? "firststepcirclecustom"
                : "firststepcirclecustomblank"
            }
          >
            1
          </p>
          <p
            className={
              displayStateHandlerToken === 0
                ? "firststeptextcolor"
                : "firststeptext"
            }
          >
            Sign up on eBay
          </p>
        </div>
        <div className="secondstep">
          <p
            className={
              displayStateHandlerToken === 2
                ? "secondstepcirclecustom"
                : "secondstepcirclecustomblank"
            }
          >
            2
          </p>
          <p
            className={
              displayStateHandlerToken === 2
                ? "secondsteptextcolor"
                : "secondsteptext"
            }
          >
            Token will created on eBay
          </p>
        </div>
        <div className="thirdstep">
          <p
            className={
              displayStateHandlerToken === 1
                ? "thirdstepcirclecustom"
                : "thirdstepcirclecustomblank"
            }
          >
            3
          </p>
          <p
            className={
              displayStateHandlerToken === 2
                ? "thirdsteptextcolor"
                : "thirdsteptext"
            }
          >
            Token accept
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TokenSteps);
