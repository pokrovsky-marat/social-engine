import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost}
            changePost={props.changePost}/>
        </div>
    );
}

export default Profile;
