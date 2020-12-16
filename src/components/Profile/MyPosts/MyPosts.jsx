import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {addPost} from "../../../redux/profilePageReducer";

const AddPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} placeholder="Add your post" name={'message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

function MyPosts(props) {
    return (
        <div className={c.posts}>
            <h3>My posts</h3>
            <AddPostsFormContainer onSubmit={props.addPost}/>
            {props.posts.map(i => <Post key={i.id} message={i.message}/>)}
        </div>
    );
}

let AddPostsFormContainer = reduxForm({form: 'addPost'})(AddPostsForm)
export default MyPosts;
