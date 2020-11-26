import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/state";


function MyPosts(props) {
    let newPost = React.createRef();



    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    function textOnChange() {
        props.store.dispatch(changePostActionCreator(newPost.current.value));
    }

    return (

        <div className={c.posts}>

            <h3>My posts</h3>
            <textarea onChange={textOnChange} value={props.store.getState().profilePage.newPostMessage} ref={newPost}
                      placeholder="Your news..." id="" cols="30" rows="3"></textarea>
            <br/>
            <button onClick={addPost}>Send</button>


            {props.store.getState().profilePage.posts.map(i => <Post message={i.message}/>)}

        </div>
    );
}

export default MyPosts;
