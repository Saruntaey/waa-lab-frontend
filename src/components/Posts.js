import React from "react"
import { Post } from "./Post"
import "./Posts.css"

export function Posts(props) {
    return (
        <div className="card-holder">
         {props.posts.map(p => <Post key={p.id} post={p} />)}
        </div>
    )
}