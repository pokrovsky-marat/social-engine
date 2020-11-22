import c from "./ProfileInfo.module.css";
function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          className={c.content_img}
          src="https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg"
        />
      </div>
      <div className={c.description}>ava + description</div>
    </div>
  );
}
export default ProfileInfo;
