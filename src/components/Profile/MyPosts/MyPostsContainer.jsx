import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import MyContext from "../../../MyContext";

function MyPostsContainer(props) {


    return (
        <MyContext.Consumer>
            {(store) => {
            function addPost() {
                store.dispatch(addPostActionCreator());
            }

            function textOnChange(newPost) {
                store.dispatch(changePostActionCreator(newPost));
            }

            return (
                <MyPosts posts={store.getState().profilePage.posts}
                         newPostMessage={store.getState().profilePage.newPostMessage}
                         addPost={addPost}
                         textOnChange={textOnChange}/>
            )
        }}
        </MyContext.Consumer>

    );
}

export default MyPostsContainer;
