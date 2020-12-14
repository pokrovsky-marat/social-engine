import {api, profileApi} from "../api/api";

const CHANGE_POST = 'CHANGE-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET-PROFILE-INFO';
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE';
const MY_USER_ID = 13067;

let initialState = {
    posts: [
        {id: 0, message: "Hello my  sister-twister"},
        {id: 1, message: " bah bah bababah"},
        {id: 3, message: "User 3"},
        {id: 4, message: "Hey, hey, hey, ya-ha-ha!!!"}
    ],
    newPostMessage: "",
    profileInfo: null,
    statusProfile: ""
}

function profilePageReducer(state = initialState, action) {
    console.log("profilePageReducer")
    let newState = {...state}
    newState.posts = [...state.posts]
    if (action.type === ADD_POST) {
        let newId = state.posts[state.posts.length - 1].id + 1;
        let message = state.newPostMessage;
        newState.posts.push({id: newId, message: message});
        newState.newPostMessage = "";// Clear text area
    } else if (action.type === CHANGE_POST) {
        {
            let newState = {...state}
            newState.newPostMessage = action.post;
            return newState
        }
    } else if (action.type === SET_PROFILE_INFO) {
        {
            return {...state, profileInfo: action.profileInfo}
        }
    } else if (action.type === SET_STATUS_PROFILE) {
        {
            return {...state, statusProfile: action.statusProfile}
        }
    }
    return newState;
}


export function addPostActionCreator() {
    return {type: ADD_POST}
}

export function changePostActionCreator(post) {
    return {type: CHANGE_POST, post: post}
}

export function setProfileInfo(profileInfo) {
    return {type: SET_PROFILE_INFO, profileInfo}
}

export function setStatusProfile(statusProfile) {
    return {type: SET_STATUS_PROFILE, statusProfile}
}

export const getUser = (userId = MY_USER_ID) => {
    return (dispatch) => {
        api.getUser(userId).then((response) => {
            dispatch(setProfileInfo(response));
        });
    }
}
export const getStatusProfile = (userId = MY_USER_ID) => {
    return (dispatch) => {
        profileApi.getStatusProfile(userId).then((response) => {
            dispatch(setStatusProfile(response));
        });
    }
}
export const updateStatusProfile = (status) => {
    return (dispatch) => {
        profileApi.updateStatusProfile(status).then((response) => {
            debugger
            if (response.resultCode === 0) {
                dispatch(setStatusProfile(status));
            }

        });
    }
}


export default profilePageReducer;