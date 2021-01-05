import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/formControls/formControls";
import {maxLength20, requiredField} from "../../utils/validators/validator";

const maxLength30 = maxLength20(30)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength30]} component={TextArea} placeholder="type your message"
                       name={'text'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
let AddMessageReduxForm = reduxForm({form: 'addDialog'})(AddMessageForm)
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {props.dialogsPage.dialogs.map(item => <DialogItem id={item.id} key={item.id} name={item.name}/>)}
            </div>

            <div className={s.messages}>
                <AddMessageReduxForm onSubmit={props.addDialogMessage}/>

                {props.dialogsPage.messages.map(i => <Message key={i.id} text={i.text}/>)}
            </div>
        </div>
    )
}
export default Dialogs;
