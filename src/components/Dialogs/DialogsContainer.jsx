import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

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
let DialogsWithRedirect = WithAuthRedirect(Dialogs); //Обернули Dialogs в HOC WithAuthRedirect, который получает пропс и редиректится
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect)


export default DialogsContainer;