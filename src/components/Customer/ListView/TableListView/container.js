import { connect } from "react-redux";
import TableListView from "./component";

const mapStateToProps = (state) => ({
  listTableData: state.TABLE_LIST_VIEW.data.listTableData,
  headerTableData: state.TABLE_LIST_VIEW.data.headerTableData,
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
)(TableListView);
