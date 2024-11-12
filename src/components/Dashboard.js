import React , {useState} from "react"
import { Posts } from "./Posts"
import { AddPost } from "./AddPost"
import { PostDetail } from "./PostDetail"


export function DashBoard() {
    const [postId, setPostId] = useState(null)

    return (
        <div>
            <Posts onPostSelect={setPostId} />
            {postId && <PostDetail id={postId} onDeleted={() => setPostId(null)} />}
            <AddPost />
        </div>
    ) 
}