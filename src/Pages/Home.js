import React from "react"
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <div className="flex-jstfy-ctnt-center">
        <div className="home-main-container grid jstfy-ctnt-spc-around align-itm-center">
            <div className="txt-container grid">
                <h1>Nolety</h1>
                <h3>Meet Your Modern Note Taking App</h3>
                    <p>Find notes by searching for titles, dates, content types, and keywords!</p>

                <Link to="/Notes">
                <button className="home-page-btn">Getting start
                </button></Link>
            </div>
            <img className="home-img" src="https://rustytugman.files.wordpress.com/2015/07/notes.png" alt="home-page" />
        </div>
    </div>
  )
}

export {Home}