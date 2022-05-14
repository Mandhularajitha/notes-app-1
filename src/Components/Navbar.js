import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
      <nav className="nav-bar flex jstfy-ctnt-spc-between position-sticky z-index">
      <div className="logo-design flex flex-direction-column">
        <Link to="/" className="logo"><span>Notely</span></Link>
      </div>
      <ul className="side-nav-section flex jstfy-ctnt-spc-between align-itm-center">
        <Link to="/Login" className="login-btn">Login</Link>
      </ul>
      </nav>
    
  )
}

export {Navbar}