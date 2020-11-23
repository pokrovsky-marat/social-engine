import c from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    return (

        <div className={c.posts}>

            <h3>My posts</h3>

            <textarea placeholder="Your news..." id="" cols="30" rows="3"></textarea>
            <br/>
            <button>Send</button>


            {props.arr.map(i => <Post message={i.message}/>)}

        </div>
    );
}

export default MyPosts;
