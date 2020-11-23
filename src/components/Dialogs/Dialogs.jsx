import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogData = [
    {id: 0, name: "Oleg"},
    {id: 1, name: "Pete"},
    {id: 2, name: "Marat"},
    {id: 3, name: "Pat"},
    {id: 4, name: "John"},
    {id: 5, name: "Kate"},
    {id: 6, name: "Julia"},
    {id: 7, name: "Yuri"}
];
let messageData = [
    {id: 0, text: "Hi"},
    {id: 1, text: "Hey, How is it going?"},
    {id: 2, text: "Bye-bye"},
];

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogData.map(item => <DialogItem id={item.id} name={item.name}/>)}
            </div>
            <div className={s.messages}>

                {messageData.map(i => <Message text={i.text}/>)}

            </div>
        </div>
    )
}
export default Dialogs;