import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FilterListIcon from "@material-ui/icons/FilterList";
import TableFilter from '../TableFilter/container'
class TableHeader extends Component {
  state = {
    tablefilter: false,
  };
  displayhandletableFilter = (e) => {
    this.setState({ tablefilter: e });
  };

  render() {
    const { classes, headerTableData } = this.props;
    const { tablefilter } = this.state;

    return (
      <div className={classes.tableheadercontainer}>
         {tablefilter === true ?
        <div>
        <TableFilter displayhandletableFilter={tablefilter}/>
        </div>
        :null}
        <Grid container spacing={3} className={classes.tableheaderwrapper}>
          <Grid item>
            {headerTableData
              ? headerTableData.map((item, index) => (
                  <p key={index}>{item.blanktitle}</p>
                ))
              : ""}
          </Grid>
          <Grid item xs={3}>
            {headerTableData
              ? headerTableData.map((item, index) => (
                  <p key={index}>{item.ean}</p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {headerTableData
              ? headerTableData.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {headerTableData
              ? headerTableData.map((item, index) => (
                  <p key={index}>{item.kattitle}</p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {headerTableData
              ? headerTableData.map((item, index) => (
                  <p key={index}>{item.vedtitle}</p>
                ))
              : ""}
          </Grid>
          <Grid item>
            {headerTableData
              ? headerTableData.map((item, index) => (
                  <p key={index}>{item.pricetitle}</p>
                ))
              : ""}
          </Grid>
          <Grid item>
            <p>
              <FilterListIcon  onClick={()=>  this.setState({tablefilter: !this.state.tablefilter})}/>
            </p>
          </Grid>
        </Grid>
       
      </div>
    );
  }
}
export default withStyles(styles)(TableHeader);
