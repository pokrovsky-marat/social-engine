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
let dialogData = [{id: 0, name: "Oleg"},
    {id: 1, name: "Pete"}];

let messageData = [{id: 0, text: "Hi"},
    {id: 1, text: "Hey, How is it going?"}];

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id="2" name="Marat"/>
                <DialogItem id="3" name="Pat"/>
                <DialogItem id="4" name="John"/>
                <DialogItem id="5" name="Kate"/>
                <DialogItem id="6" name="Julia"/>
                <DialogItem id="7" name="Yuri"/>
            </div>
            <div className={s.messages}>
                <Message text={messageData[0].text}/>
                <Message text={messageData[1].text}/>
                <Message text="Bye-bye"/>

            </div>
        </div>
    )
}
export default Dialogs;