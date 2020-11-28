import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    function textOnChange(newPost) {
        props.store.dispatch(changePostActionCreator(newPost));
    }

    return (
        <MyPosts posts={props.store.getState().profilePage.posts}
                 newPostMessage={props.store.getState().profilePage.newPostMessage}
                 addPost={addPost}
                 textOnChange={textOnChange}/>
    );
}

export default MyPostsContainer;
