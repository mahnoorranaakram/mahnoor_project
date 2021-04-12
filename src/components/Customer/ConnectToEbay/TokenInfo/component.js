import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import IwaysLogo from "../../../../resources/images/Auth/iwayslogo.jpg";
import IwaysLogoText from "../../../../resources/images/Auth/logo.png";
import ArrowBackTwoToneIcon from "@material-ui/icons/ArrowBackTwoTone";

class TokenInfo extends Component {
  render() {
    const { classes, displayStateHandler } = this.props;

    const listData = [
      {
        title:
          "Über den Token verknüpfst  Du dein Listing Konto mit Deinem eBay Konto.Die Verbindung bleibt für 18 Monate bestehen.",
      },
      {
        title: "Das ermöglicht das Importieren deiner Artikeldaten auf eBay.",
      },
      {
        title: "Deine Daten bleiben dabei gesichert.",
      },
    ];

    return (
      <div>
        <div className={classes.whattokenback}>
          <ArrowBackTwoToneIcon
            className={classes.backicon}
            onClick={() => displayStateHandler(0)}
          />
          Anmelden auf eBay
        </div>
        <div className={classes.infowrapper}>
          <h1>Was ist ein Token?</h1>
          <div className={classes.mainwrapper}>
            <div className="first">
              {listData
                ? listData.map((item, index) => (
                    <div className={classes.contentbox} key={index}>
                      <img src={IwaysLogo} alt="" />
                      <span>{item.title}</span>
                    </div>
                  ))
                : ""}
            </div>

            <div className={classes.infofooter}>
              <img src={IwaysLogoText} alt="" />
              <span>Listing Tool</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TokenInfo);
