import axios from "axios"
import React, {useEffect, useState} from "react"

export function PostDetail(props) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${props.id}`)
        .then((res) => {
            setPost(res.data)
        })
    }, [props.id])

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
                                    axios.delete(`http://localhost:8080/posts/${props.id}`)
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