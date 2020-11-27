import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: "Hello my  sister-twister"},
                {id: 1, message: " bah bah bababah"},
                {id: 3, message: "Message 3"},
                {id: 4, message: "Hey, hey, hey, ya-ha-ha!!!"}
            ],
            newPostMessage: "New Post Message"
        },
        dialogsPage: {
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
            newDialogMessage: "New Dialog Message"
        }
    },
    _rerenderEntireTree() {
        console.log("No observers was subscribed")
    },
    getState() {
        return this._state;
    },
    subscribe(callback) {
        this._rerenderEntireTree = callback;
    },

    dispatch(action) {
        profilePageReducer(this._state.profilePage, action)
        dialogsPageReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree();
    }
}

window.store = store;
export default store;