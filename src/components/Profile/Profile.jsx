import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
//some text
function Profile() {
  return (
    <div>
      <div>
        <img
          className={c.content_img}
          src="https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}
export default Profile;
