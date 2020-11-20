import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      <img
        src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_hq.jpg"
        alt="ava"
      />
      <p>{`${props.message} --- ${props.message}`}</p>
    </div>
  );
}
export default Post;
