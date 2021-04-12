import { connect } from "react-redux";
import EANEntry from "./component";
import {
    entryFieldChangeHandler,
    textFieldChangeHandler
} from "./actions";

const mapStateToProps = state => ({
    fields: state.EAN_ENTRY.forms.EnterEANForm.fields
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(EANEntry);