import React from 'react';
import { Navbar } from '../../Components/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './Notes.css'

const Notes = () => {
  return (
      <>
    <Navbar />
    <div className="main-container grid">
    <div>
    <Sidebar />
    </div>

    <div className="grid jstfy-ctnt-center">
        <h2>Create New Note</h2>
        <div className="note-container ">
            <input onChange={(e) => setTitle(e.target.value) } className="title" type="text" placeholder="Title" />
            <section className="style-btn flex">
                <button className="txt-style-btn">
                    <img className="txt-logo-img" src="https://cdn-icons-png.flaticon.com/128/88/88393.png" alt="nhi ayi" />
                </button>
                <button className="txt-style-btn">
                    <img className="txt-logo-img" src="https://cdn-icons-png.flaticon.com/128/5099/5099214.png" alt="" />
                </button>
                <button className="txt-style-btn">
                    <img className="txt-logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9Xkin5zZMUKfIhPVv77p1SQ61zxQ1Mz2pQ&usqp=CAU" alt="" />
                </button>
            </section>
            <section>
                <textarea className="content" name="text" cols="30" rows="10" placeholder=""></textarea>
            </section>
        </div>
        <section className="btn-section flex">

            <img className="plus-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqz9ojOswVPWM6bM49LdTbmU6OQ4IKZpxIaA&usqp=CAU" alt="" />
            <button className="create-note-btn">
                Create Notes app
            </button>
        </section>
    </div>
    </div>
    </>
  )
}

export {Notes}