import axios from "axios"
import React, {useEffect, useState, useContext} from "react"
import { SelectedPostCtx } from "../context/SelectedPost"

export function PostDetail(props) {
    const [post, setPost] = useState(null)
    const postId = useContext(SelectedPostCtx);

    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${postId}`)
        .then((res) => {
            setPost(res.data)
        })
    }, [postId])

    return (
        <>
            <h1>Post detail</h1>
            <div className="card">
                {
                    post ?
                    <>
                        <p>Id: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Content: {post.content}</p>
                        <p>Author: {post.author}</p>
                        <button 
                            onClick={() => {
                                    axios.delete(`http://localhost:8080/posts/${post.id}`)
                                    .then(() => {props.onDeleted()})
                            }}
                        >
                            delete
                        </button>
                    </> :
                    "Loading..."
                }
            </div>
        </>
    ) 
}