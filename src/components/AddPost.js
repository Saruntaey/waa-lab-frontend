import axios from "axios"
import React, { useRef } from "react"

export function AddPost() {
    const formRef = useRef()

    return (
        <>
            <h1>Add post</h1>
            <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
                <input placeholder="title" name="title"/>
                <input placeholder="author" name="author"/>
                <input placeholder="content" name="content"/>
                <button
                    onClick={() => {
                        const form = formRef.current
                        const {title, author, content} = form
                        axios.post("http://localhost:8080/posts", {
                            title: title.value,
                            author: author.value,
                            content: content.value,
                        }).then(() => {
                            title.value = ""
                            author.value = ""
                            content.value = ""
                        })
                    }}
                >
                    New Post
                </button>
            </form>
        </>
    )
}