import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import ShoeImg from "../../../../resources/images/Auth/shoe.png";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

class ArticlePhotos extends Component {
    render() {
        const {
            classes,
            addEditPhoto,
            isEditPhotoHandler
        } = this.props;

        return (
                <div className={classes.articlephotowrapper} id="photos">
                    <div className={classes.titlewrapper}>
                        <span className="title">Produktfotos</span>
                        <span className="description" >Drag & Drop für Bilder austauschen</span>
                    </div>

                    <Grid container className={classes.photoeditwrapper}>
                        <div className={addEditPhoto ? "hideeditwrapper" : "editwrapper"}>
                            <Button color="primary" variant="outlined" onClick={isEditPhotoHandler}>Bearbeiten/Hinzufügen</Button>
                        </div>

                        <Grid item xs={12} md={12}>
                            <Grid container>
                            {
                                ["","","",""].map((item, index) => (
                                    <Grid item xs={6} md={3} key={index}>
                                    <div className={classes.smallboximg} >
                                        <img src={ShoeImg} alt="" />
                                        <div className="options">
                                            <AddPhotoAlternateIcon />
                                            <DeleteOutlineIcon />
                                        </div>
                                    </div>
                                    </Grid>
                                ))
                            }
                            </Grid>
                            
                        </Grid>

                        <Grid item xs={12} md={3}>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default withStyles(styles)(ArticlePhotos);