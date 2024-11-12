import React from "react"
import "./Post.css"

export function Post(props) {
    return (
        <div className="card" onClick={() => props.onPostSelect(props.post.id)}>
            <p>Id: {props.post.id}</p>
            <p>Title: {props.post.title}</p>
            <p>Author: {props.post.author}</p>
        </div>
    )
}