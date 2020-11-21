import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(myProps) {
  return (
    <div className={c.posts}>
      <p>My posts</p>

      <textarea placeholder="Your news..." id="" cols="30" rows="3"></textarea>
      <br />
      <button>Send</button>
      <Post message="Message 1" />
      <Post message="Message 2" />
      <Post message="Message 3" />
    </div>
  );
}
export default MyPosts;
