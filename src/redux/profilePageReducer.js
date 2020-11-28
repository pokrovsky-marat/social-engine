const CHANGE_POST = 'CHANGE-POST';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 0, message: "Hello my  sister-twister"},
        {id: 1, message: " bah bah bababah"},
        {id: 3, message: "Message 3"},
        {id: 4, message: "Hey, hey, hey, ya-ha-ha!!!"}
    ],
    newPostMessage: "New Post Message"
}

function profilePageReducer(state = initialState, action) {
    if (action.type === ADD_POST) {
        let newId = state.posts[state.posts.length - 1].id + 1;
        let message = state.newPostMessage;
        state.posts.push({id: newId, message: message});
        state.newPostMessage = "";// Clear text area
    } else if (action.type === CHANGE_POST) {
        state.newPostMessage = action.post;
    }
    return state;
}


export function addPostActionCreator() {
    return {type: ADD_POST}
}

export function changePostActionCreator(post) {
    return {type: CHANGE_POST, post: post}
}

export default profilePageReducer;