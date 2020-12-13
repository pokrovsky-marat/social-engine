import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addDialogMessage: () => {
            dispatch(addDialogActionCreator())
        },
        changeDialogMessage: (value) => {
            dispatch(changeDialogActionCreator(value))
        }
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)