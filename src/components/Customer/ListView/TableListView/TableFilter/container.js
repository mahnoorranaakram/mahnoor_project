import { connect } from "react-redux";
import TableFilter from "./component";

const mapStateToProps = (state) => ({
  filterDataList:state.TABLE_LIST_VIEW.data.filterDataList
});

const mapDispatchToProps = (dispatch, props) => ({});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TableFilter);
