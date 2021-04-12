import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import productImage from "../../../../../resources/images/Tablelist/productphotolist.svg";
import {Grid} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ScrollButton from 'react-scroll-button'
import { Scrollbars } from 'react-custom-scrollbars';
import AlertDialog from "../../../../common/ReduxBased/confirmationDialog/container";

class TableList extends Component {
  state = {
    show: false,
  };
  showAlertDialog = (value) => {
    this.setState({ show: value });
};
  render() {
    const { classes, listTableData } = this.props;

    return (
      <div className={classes.tablelistwrapper}>
         <ScrollButton 
                behavior={'smooth'} 
                buttonBackgroundColor={'#1875F0'}
                iconType={'arrow-up'}
                className="scrollfullpageicon"
                onClick={()=> window.scrollTo(0, 0)}
            />
        <Scrollbars  autoHide style={{  height: 600 }}>
        <Grid container spacing={3}>
          <Grid item className="imagemaintable">
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttableimg" key={index}>
                    <img src={productImage}   className="imgproduct"/>
                  </p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttable" key={index}>
                    <FiberManualRecordIcon className="doticon"/>
                    {item.ean}
                  </p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttable" key={index}>
                    {item.title}
                  </p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttable" key={index}>
                    {item.kat}
                  </p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttable" key={index}>
                    {item.ved}
                  </p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttable" key={index}>
                    {item.price}
                  </p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {listTableData
              ? listTableData.map((item, index) => (
                  <p className="maplisttable" key={index}>
                    <DeleteOutlineIcon className="dellisticon"  onClick={() => this.showAlertDialog(true)}/>
                  </p>
                ))
              : ""}
          </Grid>
        </Grid>

        <AlertDialog
                                // customClass={classes.dialog}
                                // alertClass={true}
                                maxWidth={"xs"}
                                open={this.state.show}
                                showTitle={true}
                                title={'Listing vollständig'}
                                hideApplyButton={false}
                                hideCancelButton={false}
                                cancelButtonText={'ZUR LISTE'}
                                applyButtonText={'ARTIKEL JETZT LISTEN'}
                                message={"Congratulation  All item data are complete. You can now list all articles"}
                                applyButtonText={"Done"}
                                cancelAlertDialog={() => this.showAlertDialog(false)}
                                closeAlertDialog={() => this.showAlertDialog(false)}
                                applyAlertDialog={() => this.showAlertDialog(false)}
                            />
        </Scrollbars>
      </div>
    );
  }
}
export default withStyles(styles)(TableList);
