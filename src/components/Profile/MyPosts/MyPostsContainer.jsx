import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        textOnChange: (newPost) => {
            dispatch(changePostActionCreator(newPost))
        }

    }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
