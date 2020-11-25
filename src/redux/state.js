import {rerenderEntireTree} from "../render";

export function addPost() {
    let newId = state.profilePage.posts[state.profilePage.posts.length - 1].id + 1;
    let message = state.profilePage.newPostMessage;
    state.profilePage.posts.push({id: newId, message: message});
    state.profilePage.newPostMessage = "";// Clear text area
    rerenderEntireTree(state, addPost, changePost);
}

export function changePost(post) {
    state.profilePage.newPostMessage = post;
    rerenderEntireTree(state, addPost, changePost);
}

let state = {
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
}
export default state;