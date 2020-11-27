import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react'
import {addDialogActionCreator, changeDialogActionCreator} from "../../redux/dialogsPageReducer";

const Dialogs = (props) => {
    let newDialogMessage = React.createRef();
    let addDialogMessage = () => {
        props.store.dispatch(addDialogActionCreator());
    }
    let changeDialogMessage = () => {
        props.store.dispatch(changeDialogActionCreator(newDialogMessage.current.value));
    }
    debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.store.getState().dialogsPage.dialogs.map(item => <DialogItem id={item.id} name={item.name}/>)}
            </div>
            <div className={s.messages}>
                <textarea onChange={changeDialogMessage} value={props.store.getState().dialogsPage.newDialogMessage} ref={newDialogMessage}
                          placeholder="type your message" name="" id="" cols="30"
                          rows="3"></textarea>
                <div>
                    <button onClick={addDialogMessage}> Add your message</button>
                </div>
                {props.store.getState().dialogsPage.messages.map(i => <Message text={i.text}/>)}

            </div>
        </div>
    )
}
export default Dialogs;