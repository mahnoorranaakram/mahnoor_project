import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

class LogoutHeader extends Component {
    
    render() {
        const {
            classes
            } = this.props;

        return (
            <>
                Logout Header
            </>
        )
    }
}

export default withStyles(styles)(LogoutHeader);