import c from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
    {id: 0, message: "Message 1"},
    {id: 1, message: "Message 2"},
    {id: 3, message: "Message 3"},
    {id: 4, message: "Hey, hey, hey, ya-ha-ha!!!"}
];

function MyPosts(myProps) {
    return (
        <div className={c.posts}>
            <h3>My posts</h3>

            <textarea placeholder="Your news..." id="" cols="30" rows="3"></textarea>
            <br/>
            <button>Send</button>

            {postsData.map(i=><Post message={i.message}/>)}

        </div>
    );
}

export default MyPosts;
