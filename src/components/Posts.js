import React, { useEffect, useState } from "react"
import axios from "axios"
import { Post } from "./Post"
import "./Posts.css"
import { Link } from "react-router-dom"

export function Posts(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/posts")
        .then(res => {
            setPosts(res.data)
        })
    }, [])

    return (
        <>
            <h1>Posts</h1>
            <div className="card-holder">
                {posts.map(p => <Link key={p.id} to={`${p.id}`}><Post post={p} onPostSelect={props.onPostSelect} /></Link>)}
            </div>
        </>
        
    )
}