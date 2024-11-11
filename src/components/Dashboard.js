import React , {useState} from "react"
import { Posts } from "./Posts"


export function DashBoard() {
    const [posts, setPosts] = useState([
        {id: 111, title: "Happiness", author: "John"},
        {id: 112, title: "MIU", author: "Dean"},
        {id: 113, title: "Enjoy Life", author: "Jasmine"},
    ])
    const [name, setName] = useState("")

    return (
        <div>
            <Posts posts={posts}/>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button  
                onClick={() => {
                    const firstPostUpdated = { ...posts[0], title: name }
                    const postsUpdated = [...posts]
                    postsUpdated[0] = firstPostUpdated
                    setPosts(postsUpdated)
                    setName("")
                }}
            >
                Change Name
            </button>
        </div>
    ) 
}