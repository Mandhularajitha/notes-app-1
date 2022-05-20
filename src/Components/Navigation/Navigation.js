import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/themeContext';


const Navigation = () => {

    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav className="nav-bar flex jstfy-ctnt-spc-between position-sticky z-index">
                <div className='logo-design flex-column'>
                    <Link to="/" className="logo"><span> Notejoy </span></Link>
                </div>
                <section className="side-nav-section flex jstfy-ctnt-spc-between align-itm-center">
                    <Link to="/login">
                        <button className="login-btn">👤</button>
                    </Link>
                    <button onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }} className="theme-btn">
                        {theme === 'light' ? <img className="theme-mode-icon moon-logo" src="http://cdn.onlinewebfonts.com/svg/img_312366.png" alt="night mode" /> : <img className="theme-mode-icon sun-logo" src="http://cdn.onlinewebfonts.com/svg/img_232790.png" alt="night mode" />}
                    </button>
                </section>
            </nav>
        </>
    )
}

export {Navigation}