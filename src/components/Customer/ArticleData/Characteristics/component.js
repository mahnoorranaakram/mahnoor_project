import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ReactSelectValidator from "../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import CustomTextValidator from "../../../common/ReduxBased/CustomTextValidator/component";
import KeyboardArrowRightIconf from "@material-ui/icons/KeyboardArrowRight";
import { Button, Grid } from "@material-ui/core";

class ArticleCharacteristics extends Component {

    render() {
        const {
            classes,
            fields,
            textFieldChangeHandler,
            selectFieldChangeHandler
        } = this.props;

        const links = [
            {
                title: "Fahrzeuge"
            },
            {
                title: "Automobile"
            },
            {
                title: "Audi"
            }
        ]

        return (
                <div className={classes.characteristicswrapper}>
                    <div className={classes.titlewrapper}>
                        <span className="title">Artikelmerkmale</span>
                        <span className="subtitle">Kategorien</span>
                    </div>

                    <div className={classes.breadcrumbwrapper}>
                        <div className="left">
                            <span className="title">Auto & Motorrad:</span>
                            {
                                links ? links.map((item, index) => (
                                    <div className="links">
                                        <span>{item.title}</span>
                                        <KeyboardArrowRightIconf />
                                    </div>
                                )) : ""
                            }
                        </div>
                        <Button className="editbtn" color="primary" variant="outlined" >Ander</Button>
                    </div>

                    {/* Meta feidlds */}
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <div>
                                <span className={classes.textfieldslabel}>{fields.ColorField.label}</span>
                                <CustomTextValidator
                                    id={fields.ColorField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.ColorField.placeholder}
                                    name={fields.ColorField.name}
                                    value={fields.ColorField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.ColorField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>

                            <div className={classes.fieldmargin}>
                                <span className={classes.textfieldslabel}>{fields.ManufactureNumberField.label}</span>
                                <CustomTextValidator
                                    id={fields.ManufactureNumberField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.ManufactureNumberField.placeholder}
                                    name={fields.ManufactureNumberField.name}
                                    value={fields.ManufactureNumberField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.ManufactureNumberField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>

                            <div className={classes.fieldmargin}>
                                <span className={classes.textfieldslabel}>{fields.AnotherFeatureTextField.label}</span>
                                <CustomTextValidator
                                    id={fields.AnotherFeatureTextField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.AnotherFeatureTextField.placeholder}
                                    name={fields.AnotherFeatureTextField.name}
                                    value={fields.AnotherFeatureTextField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.AnotherFeatureTextField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <div>
                                <span className={classes.textfieldslabel}>{fields.WeightField.label}</span>
                                <CustomTextValidator
                                    id={fields.WeightField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.WeightField.placeholder}
                                    name={fields.WeightField.name}
                                    value={fields.WeightField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.WeightField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>
                            
                            <div className={classes.fieldmargin}>
                                <span className={classes.textfieldslabel}>{fields.AnotherFeatureSelectField.label}</span>
                                <ReactSelectValidator
                                    id={fields.AnotherFeatureSelectField.name}
                                    name={fields.AnotherFeatureSelectField.name}
                                    value={fields.AnotherFeatureSelectField.value}
                                    placeholder={fields.AnotherFeatureSelectField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.AnotherFeatureSelectField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.AnotherFeatureSelectField.options}
                                    className={classes.selectfields}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default withStyles(styles)(ArticleCharacteristics);