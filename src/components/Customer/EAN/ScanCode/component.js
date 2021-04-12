import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

class ScanNumber extends Component {

  state = {
    data: ''
  }

  updateCodeHandler = (value) => {
    this.setState({
      data: value
    })
    if(value.length > 0) {
      this.props.showScanDialogHandler(false);
      let data = {
        value: value
      }
      this.props.textFieldChangeHandler('EANField', data)
    }
  }

  render() {
    const {
      classes,
    } = this.props;

    const {
      data
    } = this.state;

    return (
      <div className={classes.scancodewrapper}>
        {
          data.length > 0  ? <span>{data}</span> :
      
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) this.updateCodeHandler(result.text)
              else this.updateCodeHandler('')
            }}
          />
        }
      </div>
    );
  }
}

export default withStyles(styles)(ScanNumber);
