import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Main_containerhamePage">
      <div className="home-main-container flex jstfy-ctnt-center">
        <div className="home-container grid jstfy-ctnt-spc-around align-itm-center">
          <div className="txt-container grid">
            <div className="textcontainer">
              {" "}
              <h1 className="textdesign1">Color Notely</h1>
              <h3 className="textdesign2">
                Color your thoughts,Wisit the Notely App
              </h3>
              <Link to="/text-editor">
                <button className="join-btn">Join Now</button>
              </Link>
            </div>
          </div>
        
          <img
            className="home-img"
            src="https://rustytugman.files.wordpress.com/2015/07/notes.png"
            alt="home image"
          />
        </div>
      </div>
    </div>
  );
};
export { Home };
