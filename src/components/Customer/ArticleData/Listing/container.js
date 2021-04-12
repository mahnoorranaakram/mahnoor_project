import { connect } from "react-redux";
import ArticleListing from "./component";

const mapStateToProps = state => ({
    fields: state.ARTICLE_DATA.forms.articleForm.fields,
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: () => {

    },
    selectFieldChangeHandler: () => {
        
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
)(ArticleListing);