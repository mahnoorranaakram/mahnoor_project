import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ReactSelectValidator from "../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import CustomTextValidator from "../../../common/ReduxBased/CustomTextValidator/component";
import { Grid, Checkbox } from "@material-ui/core";

class ArticleListing extends Component {

    render() {
        const {
            classes,
            fields,
            textFieldChangeHandler,
            selectFieldChangeHandler
        } = this.props;

        return (
                <div className={classes.listingwrapper} id="listing">
                    <div className={classes.titlewrapper}>
                        <span>Listinginformation</span>
                    </div>

                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <div>
                                <span className={classes.textfieldslabel}>{fields.TitleField.label}</span>
                                <CustomTextValidator
                                    id={fields.TitleField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.TitleField.placeholder}
                                    name={fields.TitleField.name}
                                    value={fields.TitleField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.TitleField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>

                            <div className={classes.fieldmargin}>
                                <span className={classes.textfieldslabel}>{fields.StatusField.label}</span>
                                <ReactSelectValidator
                                    id={fields.StatusField.name}
                                    name={fields.StatusField.name}
                                    value={fields.StatusField.value}
                                    placeholder={fields.StatusField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.StatusField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.StatusField.options}
                                    className={classes.selectfields}
                                />
                            </div>

                            <div className={classes.fieldmargin}>
                                <span className={classes.textfieldslabel}>{fields.PriceProposalField.label}</span>
                                <CustomTextValidator
                                    id={fields.PriceProposalField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.PriceProposalField.placeholder}
                                    name={fields.PriceProposalField.name}
                                    value={fields.PriceProposalField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.PriceProposalField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>

                            <div className={classes.fieldmargin}>
                                <span className={classes.textfieldslabel}>{fields.QuantityField.label}</span>
                                <CustomTextValidator
                                    id={fields.QuantityField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.QuantityField.placeholder}
                                    name={fields.QuantityField.name}
                                    value={fields.QuantityField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.QuantityField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className={classes.textfields}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <div className={classes.deliverytitle}>
                                <span className="title">Lieferung & Versand</span>

                                <div>
                                    <span className={classes.textfieldslabel}>{fields.ShippingField.label}</span>
                                    <div>
                                        <ReactSelectValidator
                                            id={fields.ShippingField.name}
                                            name={fields.ShippingField.name}
                                            value={fields.ShippingField.value}
                                            placeholder={fields.ShippingField.placeholder}
                                            isClearable={true}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.ShippingField.name,
                                                    value
                                                );
                                            }}
                                            isSearchable={true}
                                            options={fields.ShippingField.options}
                                            className={classes.shippingselectfields}
                                        />
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </div>
                                </div>

                                <div className={classes.fieldmargin}>
                                    <span className={classes.textfieldslabel}>{fields.ProviderField.label}</span>
                                    <div>
                                        <ReactSelectValidator
                                            id={fields.ProviderField.name}
                                            name={fields.ProviderField.name}
                                            value={fields.ProviderField.value}
                                            placeholder={fields.ProviderField.placeholder}
                                            isClearable={true}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.ProviderField.name,
                                                    value
                                                );
                                            }}
                                            isSearchable={true}
                                            options={fields.ProviderField.options}
                                            className={classes.shippingselectfields}
                                        />
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </div>
                                </div>

                                <div className={classes.fieldmargin}>
                                    <span className={classes.textfieldslabel}>{fields.ProcessingField.label}</span>
                                    <div>
                                        <ReactSelectValidator
                                            id={fields.ProcessingField.name}
                                            name={fields.ProcessingField.name}
                                            value={fields.ProcessingField.value}
                                            placeholder={fields.ProcessingField.placeholder}
                                            isClearable={true}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.ProcessingField.name,
                                                    value
                                                );
                                            }}
                                            isSearchable={true}
                                            options={fields.ProcessingField.options}
                                            className={classes.shippingselectfields}
                                        />
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default withStyles(styles)(ArticleListing);