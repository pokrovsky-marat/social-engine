import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";


function Profile(props) {
    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
