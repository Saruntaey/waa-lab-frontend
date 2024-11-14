import React from "react"
import { Link, Outlet } from "react-router-dom"
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="nav-bar">
                <Link to="">posts</Link>
                <Link to="new">new post</Link>
            </div>
            <Outlet />
        </>
    ) 
}