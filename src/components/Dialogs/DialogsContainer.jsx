import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;