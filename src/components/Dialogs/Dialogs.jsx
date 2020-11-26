import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.store.getState().dialogsPage.dialogs.map(item => <DialogItem id={item.id} name={item.name}/>)}
            </div>
            <div className={s.messages}>

                {props.store.getState().dialogsPage.messages.map(i => <Message text={i.text}/>)}

            </div>
        </div>
    )
}
export default Dialogs;