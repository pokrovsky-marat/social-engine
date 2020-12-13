import c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ava from "./../../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
import StatusProfile from "./StatusProfile/StatusProfile";
import React from "react";

function ProfileInfo(props) {
    if (props.profileInfo) {
        return (
            <div>
                <StatusProfile myStatus='my status'/>
                <div>
                    {/*<img
                    className={c.content_img}
                    src="https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg"
                />*/}
                    <table className={c.table}>
                        <tbody>
                            <tr>
                                <td>About Me</td>
                                <td>{props.profileInfo.aboutMe}</td>
                            </tr>
                            <tr>
                                <td>Full Name</td>
                                <td>{props.profileInfo.fullName}</td>
                            </tr>
                            <tr>
                                <td>Looking for a job Description</td>
                                <td>{props.profileInfo.lookingForAJobDescription}</td>
                            </tr>
                            <tr>
                                <td>Is looking for a job</td>
                                <td>{props.profileInfo.lookingForAJob ? "YES" : "NO"}</td>
                            </tr>
                            <tr>
                                <td>vk</td>
                                <td>{props.profileInfo.contacts.vk}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={c.description}>
                    <img className={c.ava} src={props.profileInfo.photos.large || ava} alt="ava"/>
                </div>
            </div>
        );
    }
    return <Preloader/>
}

export default ProfileInfo;
