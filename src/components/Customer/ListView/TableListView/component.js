import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import TableHeader from "./TableHeader/container";
import TableList from "./TableList/container";
import {Card,Button} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
class TableListView extends Component {
  render() {
    const { classes ,listTableData,headerTableData} = this.props;

    return (
      <Card className={classes.tablelistviewroot}>
        <CardContent>
          <TableHeader headerTableData={headerTableData} />
          <TableList listTableData={listTableData} />
          <div className="buttonbottomtablelist">
          <Button
            variant="contained"
            color="primary"
            className="buttonbottom"
          >
            Artikel jetzt listen
          </Button>
          </div>
          
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(TableListView);
