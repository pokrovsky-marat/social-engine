import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let addDialogMessage = () => {
        props.store.dispatch(addDialogActionCreator());
    }
    let changeDialogMessage = (value) => {
        props.store.dispatch(changeDialogActionCreator(value));
    }

    return (
        <Dialogs addDialogMessage={addDialogMessage}
                 changeDialogMessage={changeDialogMessage}
                 newDialogMessage={props.store.getState().dialogsPage.newDialogMessage}
                dialogs={props.store.getState().dialogsPage.dialogs}
        messages={props.store.getState().dialogsPage.messages}/>
    )
}
export default DialogsContainer;