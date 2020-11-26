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
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("No observers was subscribed")
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback;
    },
    addPost() {
        let newId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1;
        let message = this._state.profilePage.newPostMessage;
        this._state.profilePage.posts.push({id: newId, message: message});
        this._state.profilePage.newPostMessage = "";// Clear text area
        this.rerenderEntireTree();
    },
    changePost(post) {
        this._state.profilePage.newPostMessage = post;
        this.rerenderEntireTree();
    }

}
export default store;