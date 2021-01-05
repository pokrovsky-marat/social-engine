import c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ava from "./../../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
import React, {useState} from "react";
import StatusProfile from "./StatusProfile/StatusProfile";
import ProfileData from "./ProfileData/ProfileData";
import EditProfileData from "./EditProfileData/EditProfileData";

function ProfileInfo(props) {
    /*    const handleSubmit=(data)=>{
            debugger
            // props.updateProfileData(data,data.userId)
        }*/

    const onclickHandler = (e) => {
        e.preventDefault();
        if (!e.target.firstElementChild.files[0]) {
            return alert("Choose file before uploading");
        }

        props.updateProfilePhoto(e.target.firstElementChild.files[0], props.id);
    };
    let [editMode, setEditMode] = useState(false);
    let [editProfileData, setEditProfileData] = useState(false);
    const toggleEditProfileData = () => setEditProfileData(!editProfileData)
    if (props.profileInfo) {
        return (
            <div>
                <StatusProfile {...props} />
                {editProfileData ?
                    <EditProfileData{...props} toggleEditProfileData={toggleEditProfileData}/> :
                    <ProfileData {...props}/>}
                <button onClick={toggleEditProfileData}>Edit Profile</button>


                <div className={c.description}>
                    <img
                        onClick={() => {
                            setEditMode(!editMode);
                        }}
                        title="press me to change"
                        className={c.ava}
                        src={props.profileInfo.photos.large || ava}
                        alt="ava"
                    />
                    {editMode && props.id && (
                        <form onSubmit={onclickHandler}>
                            <input type="file" name="image"/>
                            <input type="submit" value="Send"/>
                        </form>
                    )}
                </div>
            </div>
        );
    }
    return <Preloader/>;
}

export default ProfileInfo;
