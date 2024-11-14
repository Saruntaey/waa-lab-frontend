import React , {useState} from "react"
import { Posts } from "./Posts"
import { AddPost } from "./AddPost"
import { PostDetail } from "./PostDetail"
import { SelectedPostCtx } from "../context/SelectedPost"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar"


export function DashBoard() {
    const [postId, setPostId] = useState(null)

    return (
        <SelectedPostCtx.Provider value={postId}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Navigate to="/posts" replace />}/>
                    <Route path="/posts" element={<Navbar />}>
                        <Route path="" element={<Posts onPostSelect={setPostId} />} />
                        <Route path=":id" element={<PostDetail onDeleted={() => setPostId(null)} />} />
                        <Route path="new" element={<AddPost />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </SelectedPostCtx.Provider>


    )
}