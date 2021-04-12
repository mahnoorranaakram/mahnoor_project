import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Grid, Typography, Avatar } from "@material-ui/core";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
class ListViewSidebar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.listviewsidebarwrapper}>
        <Grid container className={classes.listviewmain}>
          <Grid item className="leftsidelist">
            <div className={classes.listleftsideinfowrapper}>
              <p>
                <CloudUploadOutlinedIcon className="cloudicon"
                />
              </p>
            </div>
            <div className={classes.navlinkslistsidebarwrapper}>
              <p>77</p>
              <p className="leftsidecolorfirst">50</p>
              <p className="leftsidecolorsecond">20</p>
            </div>{" "}
          </Grid>
        </Grid>

        
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          className={classes.listviewmain}
        >
          <Grid item >
            <div className={classes.listinfowrapper}>
              <div className="type">
                <span className="lefttextone">BULKUPLOAD</span>
              </div>
              <h1 className="lefttexttwo">Artikellistings</h1>
              <span className="lefttextthird">Hansmeier.csv</span>
            </div>
            <div className={classes.navlinkslistwrapper}>
              <NavLink to={"/listview"} hash="#listing">
                EAN Gesamt
              </NavLink>
              <NavLink
                to={"/listview"}
                hash="#photos"
                className="leftsidecolorfirst"
              >
                EAN Korrekt
              </NavLink>
              <NavLink to={"/listview"} className="leftsidecolorsecond">
                EAN Fehler
              </NavLink>
            </div>{" "}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ListViewSidebar);
