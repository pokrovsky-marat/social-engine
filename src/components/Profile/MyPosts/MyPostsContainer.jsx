import React from 'react';
import {addPost} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
export default  connect(mapStateToProps, {addPost})(MyPosts)

