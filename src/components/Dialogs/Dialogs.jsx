import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react'
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let newDialogMessage = React.createRef();
    let addDialogMessage = () => {
        props.addDialogMessage();
    }
    let changeDialogMessage = () => {
        props.changeDialogMessage(newDialogMessage.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.dialogsPage.dialogs.map(item => <DialogItem id={item.id} key={item.id} name={item.name}/>)}
            </div>

            <div className={s.messages}>
                <textarea onChange={changeDialogMessage} value={props.dialogsPage.newDialogMessage}
                          ref={newDialogMessage}
                          placeholder="type your message" cols="30"
                          rows="3"/>
                <div>
                    <button onClick={addDialogMessage}> Add your message</button>
                </div>
                {props.dialogsPage.messages.map(i => <Message key={i.id} text={i.text}/>)}
            </div>
        </div>
    )
}
export default Dialogs;