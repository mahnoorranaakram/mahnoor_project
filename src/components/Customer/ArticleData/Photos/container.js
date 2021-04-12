import { connect } from "react-redux";
import ArticlePhotos from "./component";
import {
    isEditPhotoHandler
} from "../actions";

const mapStateToProps = state => ({
    addEditPhoto: state.ARTICLE_DATA.UISetting.addEditPhoto
})

const mapDispatchToProps = (dispatch, props) => ({
    isEditPhotoHandler: () => {
        dispatch(isEditPhotoHandler())
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
)(ArticlePhotos);