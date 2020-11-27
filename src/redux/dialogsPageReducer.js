const ADD_DIALOG = 'ADD-DIALOG';
const CHANGE_DIALOG = 'CHANGE-DIALOG';


function dialogsPageReducer(state, action) {
    if (action.type === ADD_DIALOG) {
        let newId = state.messages[state.messages.length - 1].id + 1;
        let message = state.newDialogMessage;
        state.messages.push({id: newId, text: message});
        state.newDialogMessage = "";// Clear text area

    } else if (action.type === CHANGE_DIALOG) {
        state.newDialogMessage = action.message;
    }
    return state;
}

export function addDialogActionCreator() {
    return {type: ADD_DIALOG}
}

export function changeDialogActionCreator(message) {
    return {type: CHANGE_DIALOG, message: message}
}

export default dialogsPageReducer;