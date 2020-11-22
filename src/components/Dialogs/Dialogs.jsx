import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="0" name="Oleg"/>
                <DialogItem id="1" name="Peter"/>
                <DialogItem id="2" name="Marat"/>
                <DialogItem id="3" name="Pat"/>
                <DialogItem id="4" name="John"/>
                <DialogItem id="5" name="Kate"/>
                <DialogItem id="6" name="Julia"/>
                <DialogItem id="7" name="Yuri"/>
            </div>
            <div className={s.messages}>
                <Message text="Hi"/>
                <Message text="Hey, How is it going?"/>
                <Message text="Bye-bye"/>

            </div>
        </div>
    )
}
export default Dialogs;