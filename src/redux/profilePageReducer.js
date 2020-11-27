const CHANGE_POST = 'CHANGE-POST';
const ADD_POST = 'ADD-POST';


function profilePageReducer(state, action) {
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