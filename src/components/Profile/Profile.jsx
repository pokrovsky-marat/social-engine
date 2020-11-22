import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

//some text
function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
