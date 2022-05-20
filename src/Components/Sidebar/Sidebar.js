import React from "react";
import { Link } from "react-router-dom";
import { useNoteContext } from "../../Context/notesContext";
import "./Sidebar.css";

const Sidebar = () => {

    const { note, dispatchNote } = useNoteContext();
    return (
        <div className="sideBar-container">
            <Link to="/text-editor">
                <div className="side-icon notes">
                    <span><i className="fa fa-sticky-note-o"></i></span>
                    <span>Notes</span>
                </div>
            </Link>
            <Link to="/label">
                <div className="side-icon">
                    <i className="sidebar-logo fa fa-bookmark-o"></i>
                    <span>Label</span>
                </div>
            </Link>
            <Link to="/archieve">
                <div className="side-icon">
                    <img className="sidebar-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQpKQGzxMmF1LzqgMlRA80jEuMJ-HZHRYUwah6n3tqfogxUenIIUI8wuE-REAFliVcjg&usqp=CAU" alt="archieve logo" />
                    <span>Archieve</span>
                </div>
            </Link>
            <Link to="/trash">
                <div className="side-icon">
                    <img className="sidebar-logo" src="https://www.pikpng.com/pngl/m/47-471206_png-file-svg-ios-trash-icon-svg-clipart.png" alt="trash logo" />
                    <span>Trash</span>
                </div>
            </Link>
        </div>
    )
}

export { Sidebar };