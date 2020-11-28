import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react'


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

                {props.dialogs.map(item => <DialogItem id={item.id} name={item.name}/>)}
            </div>
            <div className={s.messages}>
                <textarea onChange={changeDialogMessage} value={props.newDialogMessage} ref={newDialogMessage}
                          placeholder="type your message" name="" id="" cols="30"
                          rows="3"></textarea>
                <div>
                    <button onClick={addDialogMessage}> Add your message</button>
                </div>
                {props.messages.map(i => <Message text={i.text}/>)}

            </div>
        </div>
    )
}
export default Dialogs;