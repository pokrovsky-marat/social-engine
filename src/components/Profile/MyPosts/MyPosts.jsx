import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


function MyPosts(props) {
    let newPost = React.createRef();

    function addPost() {
        props.stateMethods(newPost.current.value);
        alert(newPost.current.value)
    }

    return (

        <div className={c.posts}>

            <h3>My posts</h3>

            <textarea ref={newPost} placeholder="Your news..." id="" cols="30" rows="3"></textarea>
            <br/>
            <button onClick={addPost}>Send</button>


            {props.posts.map(i => <Post message={i.message}/>)}

        </div>
    );
}

export default MyPosts;
