import React , {useState} from "react"
import { Posts } from "./Posts"
import { AddPost } from "./AddPost"
import { PostDetail } from "./PostDetail"
import { SelectedPostCtx } from "../context/SelectedPost"


export function DashBoard() {
    const [postId, setPostId] = useState(null)

    return (
        <SelectedPostCtx.Provider value={postId}>
            <Posts onPostSelect={setPostId} />
            {postId && <PostDetail onDeleted={() => setPostId(null)} />}
            <AddPost />
        </SelectedPostCtx.Provider>
    ) 
}