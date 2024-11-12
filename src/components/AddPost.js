import axios from "axios"
import React, { useState } from "react"

export function AddPost() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    return (
        <>
            <h1>Add post</h1>
            <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input placeholder="content" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button  
                onClick={() => {
                    axios.post("http://localhost:8080/posts", {
                        title,
                        author,
                        content,
                    }).then(() => {
                        setTitle("")
                        setAuthor("")
                        setContent("")
                    })
                }}
            >
                New Post
            </button>
        </>
    )
}