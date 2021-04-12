import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {Card,Grid,Radio,RadioGroup,FormControlLabel,FormControl} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Popper from '@material-ui/core/Popper';
class TableFilter extends Component {
  render() {
    const { classes,displayhandletableFilter,filterDataList } = this.props;
    return (
      <Popper  open={true}  >
       <Card className={classes.tablefilterwrapper}>
        <CardContent>
         <Grid className="mainfiltergrid">
         <p className="headerfilter">Filter</p>

           <Grid className="filtergridrow">
           <p >
           {filterDataList
              ? filterDataList.map((item, index) => (
             <p className="filtertitle" key={index}>{item.filtertitle}</p>
             ))
             : ""}
           </p>
             <p >
              {filterDataList
              ? filterDataList.map((item, index) => (
                
                <FormControl component="fieldset" key={index}>
                <RadioGroup aria-label="" name="customized-radios" value='filter' >
                  <FormControlLabel value="filters" control={<Radio />} l />
                </RadioGroup>
              </FormControl>
             ))
             : ""}     
             </p>        
           </Grid>

         </Grid>
        </CardContent>
      </Card>    </Popper>
      
    );
  }
}

export default withStyles(styles)(TableFilter);
