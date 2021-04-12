import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Header from "../../common/Header/container";
import Footer from "../../common/Footer/container";
import ListViewSidebar from "./ListviewSidebar/container";
import TableListView from "./TableListView/container";

class ListView extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Header />
        <Grid container>
          <Grid item className={classes.leftsidebar} xs={12} md={4} lg={3}>
            <ListViewSidebar />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <TableListView />
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(ListView);
