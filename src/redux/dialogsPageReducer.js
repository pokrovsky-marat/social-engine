const ADD_DIALOG = 'ADD-DIALOG';
const CHANGE_DIALOG = 'CHANGE-DIALOG';

let initialState = {
    messages: [
        {id: 0, text: "Hi"},
        {id: 1, text: "Hey, How is it going?"},
        {id: 2, text: "Bye-bye"},
    ], dialogs: [
        {id: 0, name: "Traktorbek"},
        {id: 1, name: "Peterberg"},
        {id: 2, name: "Marat"},
        {id: 3, name: "Pat"},
        {id: 4, name: "John"},
        {id: 5, name: "Kate"},
        {id: 6, name: "Julia"},
        {id: 7, name: "Yuri"}
    ],
    newDialogMessage: ""
}

function dialogsPageReducer(state = initialState, action) {
    console.log("dialogsPageReducer")
    switch (action.type) {
        case ADD_DIALOG:
            let newId = state.messages[state.messages.length - 1].id + 1;
            let message = state.newDialogMessage;
            return {
                ...state,
                newDialogMessage: "",
                messages: [...state.messages, {id: newId, text: message}]
            }

        case CHANGE_DIALOG: {
            return {...state, newDialogMessage: action.message}
        }
    }
    return state
}

export function addDialogActionCreator() {
    return {type: ADD_DIALOG}
}

export function changeDialogActionCreator(message) {
    return {type: CHANGE_DIALOG, message: message}
}

export default dialogsPageReducer;