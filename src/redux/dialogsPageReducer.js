const ADD_DIALOG = 'ADD-DIALOG';

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
}

function dialogsPageReducer(state = initialState, action) {
    console.log("dialogsPageReducer")
    switch (action.type) {
        case ADD_DIALOG:
            let newId = state.messages[state.messages.length - 1].id + 1;
            return {
                ...state,
                messages: [...state.messages, {id: newId, text: action.text}]
            }
    }
    return state
}

export function addDialogMessage(data) {
    return {type: ADD_DIALOG, text: data.text}
}
export default dialogsPageReducer;