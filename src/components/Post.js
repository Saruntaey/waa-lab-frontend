import React from "react"
import "./Post.css"

export function Post(props) {
    return (
        <div className="card">
            <p>Id: {props.post.id}</p>
            <p>Title: {props.post.title}</p>
            <p>Author: {props.post.author}</p>
        </div>
    )
}