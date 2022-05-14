import { Link } from "react-router-dom"
import "./Sidebar.css"
import React from 'react'

const Sidebar = () => {
  return (
    <div className="sideBar-Container">

    <Link to="/">
        <div className="side-icon notes">
            <span><i class="fa-solid fa-house"></i></span>
            <span>Home</span>
        </div>
    </Link>
    <Link to="/Notes">
        <div className="side-icon notes">
            <span><i className="fa fa-sticky-note-o"></i></span>
            <span>Notes</span>
        </div>
    </Link>
    <Link to="/Label">
        <div className="side-icon">
            <span><i className="fa fa-tags side-icon"></i></span>
            <span>Label</span>
        </div>
    </Link>

    <Link to="/Label">
        <div className="side-icon">
            <span><i className="fa fa-archive side-icon"></i></span>
            <span>Archieve</span>
        </div>
    </Link>

    <Link to="/Trash">
        <div className="side-icon">
            <span><i className="fa fa-trash-o side-icon"></i></span>
            <span>Trash</span>
        </div>
    </Link>
    </div>
  )
}

export {Sidebar}