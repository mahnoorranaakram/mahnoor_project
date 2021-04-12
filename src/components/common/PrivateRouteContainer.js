import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import {getAppStoreValue, isAppStore} from "./Helpers";

const mapStateToProps = state => ({
    isAuthenticated: true, //change to false isAppStore ? getAppStoreValue("accessToken") : true, 
})

const mapDispatchToProps = (dispatch, props) => ({
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
)(PrivateRoute);