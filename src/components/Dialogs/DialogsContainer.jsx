import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import MyContext from "../../MyContext";

const DialogsContainer = (props) => {


    return (
        <MyContext.Consumer>
            {(store) => {
                let addDialogMessage = () => {
                    store.dispatch(addDialogActionCreator());
                }
                let changeDialogMessage = (value) => {
                    store.dispatch(changeDialogActionCreator(value));
                }
                return (
                    <Dialogs addDialogMessage={addDialogMessage}
                             changeDialogMessage={changeDialogMessage}
                             newDialogMessage={store.getState().dialogsPage.newDialogMessage}
                             dialogs={store.getState().dialogsPage.dialogs}
                             messages={store.getState().dialogsPage.messages}/>
                )
            }}
        </MyContext.Consumer>

    )
}
export default DialogsContainer;