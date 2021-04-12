import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ClockImage from "../../../../resources/images/Auth/clock-img.png";
import { Button } from "@material-ui/core";
import TokenSuccess from "./TokenSuccess/component";
import ListingSuccess from "./ListingSuccess/component";
import TokenSteps from "./TokenSteps/component";
class TokenConnection extends Component {
  state = {
    tokenSuccess: 0,
  };

  displayStateHandlerToken = (e) => {
    this.setState({ tokenSuccess: e });
  };

  tokenConnection = () => {
    const {
      classes,
      displayStateHandler,
      displayStateHandlerToken,
    } = this.props;
    return (
      <div className={classes.infowrappertokenconnect}>
        <p className="titletokenconnect">Connect to your emebay account</p>
        <div className={classes.mainwrappertokenconnect}>
          <img src={ClockImage} alt=""  />
          <p className="desctokenconnect">
            After registering, you have to accept the eBay token within 5
            minutes.
          </p>
          <Button
            className="buttontokenconnect"
            variant="contained"
            color="primary"
            onClick={() => this.displayStateHandlerToken(1)}
          >
            Anmelden auf eBay
          </Button>
          <div className={classes.infofootertokenconnect}>
            <span onClick={() => displayStateHandler(1)}>What is token?</span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { tokenSuccess } = this.state;
    const { displayStateHandlerToken } = this.props;

    return (
      <div>
        {tokenSuccess === 0 ? (
          <div>
            <TokenSteps displayStateHandlerToken={tokenSuccess} />
            {this.tokenConnection()}
          </div>
        ) : tokenSuccess === 1 ? (
          <div>
            <TokenSteps displayStateHandlerToken={tokenSuccess} />
            <TokenSuccess
              displayStateHandlerToken={this.displayStateHandlerToken}
            />
          </div>
        ) : tokenSuccess === 2 ? (
          <ListingSuccess
            displayStateHandlerToken={this.displayStateHandlerToken}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(TokenConnection);
