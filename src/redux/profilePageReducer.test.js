import profilePageReducer, {addPost, deletePost} from "./profilePageReducer";


let initialState = {
    posts: [
        {id: 0, message: "Hello my  sister-twister"},
        {id: 1, message: " bah bah bababah"},
        {id: 3, message: "User 3"},
        {id: 4, message: "Hey, hey, hey, ya-ha-ha!!!"}
    ]
}


it("Length of posts should be incremented",()=>{
    let newState = profilePageReducer(initialState, addPost({message: 'Test message'}))
expect(newState.posts.length).toBe(5)
})
it("Value of message must to be <Test message>",()=>{
    let newState =  profilePageReducer(initialState, addPost({message: 'Test message'}))
    expect(newState.posts[4].message).toBe('Test message')
})

it("Length of posts should be decremented",()=>{
    let newState =  profilePageReducer(initialState, deletePost(0))
    expect(newState.posts.length).toBe(3)
})