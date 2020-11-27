const CHANGE_POST = 'CHANGE-POST';
const ADD_POST = 'ADD-POST';
const ADD_DIALOG = 'ADD-DIALOG';
const CHANGE_DIALOG = 'CHANGE-DIALOG';

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
    /*   addPost() {

           let newId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1;
           let message = this._state.profilePage.newPostMessage;
           this._state.profilePage.posts.push({id: newId, message: message});
           this._state.profilePage.newPostMessage = "";// Clear text area
           this._rerenderEntireTree();
       },
       changePost(post) {
           this._state.profilePage.newPostMessage = post;
           this._rerenderEntireTree();
       }*/
    dispatch(action) {

        if (action.type === ADD_POST) {
            let newId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1;
            let message = this._state.profilePage.newPostMessage;
            this._state.profilePage.posts.push({id: newId, message: message});
            this._state.profilePage.newPostMessage = "";// Clear text area
            this._rerenderEntireTree();
        } else if (action.type === CHANGE_POST) {
            this._state.profilePage.newPostMessage = action.post;
            this._rerenderEntireTree();
        } else if (action.type === ADD_DIALOG) {
            debugger;
            let newId = this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1;
            let message = this._state.dialogsPage.newDialogMessage;
            this._state.dialogsPage.messages.push({id: newId, text: message});
            this._state.dialogsPage.newDialogMessage = "";// Clear text area
            this._rerenderEntireTree();
        }else if (action.type === CHANGE_DIALOG) {
            this._state.dialogsPage.newDialogMessage = action.message;
            this._rerenderEntireTree();
        }
    }
}

export function addPostActionCreator() {
    return {type: ADD_POST}
}

export function changePostActionCreator(post) {
    return {type: CHANGE_POST, post: post}
}

export function addDialogActionCreator() {
    return {type: ADD_DIALOG}
}

export function changeDialogActionCreator(message) {
    return {type: CHANGE_DIALOG, message: message}
}

window.store = store;
export default store;