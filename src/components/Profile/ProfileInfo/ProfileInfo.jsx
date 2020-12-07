import c from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ava from "./../../../assets/pics/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
function ProfileInfo(props) {
if(props.profileInfo){
    return (
        <div>
            <div>
                <img
                    className={c.content_img}
                    src="https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg"
                />
                <table className={c.table}>
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
                        <td>{props.profileInfo.lookingForAJob?"YES":"NO"}</td>
                    </tr>
                    <tr>
                        <td>vk</td>
                        <td>{props.profileInfo.contacts.vk}</td>
                    </tr>
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
// {
//     "aboutMe": "я круто чувак 1001%",
//     "contacts": {
//     "facebook": "facebook.com",
//         "website": null,
//         "vk": "vk.com/dimych",
//         "twitter": "https://twitter.com/@sdf",
//         "instagram": "instagra.com/sds",
//         "youtube": null,
//         "github": "github.com",
//         "mainLink": null
// },
//     "lookingForAJob": true,
//     "lookingForAJobDescription": "не ищу, а дурачусь",
//     "fullName": "samurai dimych",
//     "userId": 2,
//     "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//         "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
// }
// }