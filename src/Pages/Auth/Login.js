import React, { useState } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { Navigation } from "../../Components";
import { useAuth } from "../../Context/authContext";
import "./Auth.css";

const Login = () => {

    const { login, setLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div>
                <Navigation />
            </div>
            <form className="login-main-container flex-column jstfy-ctnt-center align-itm-center">
                <div className="login-container">
                    <h3 className="text-align mtb-16">Login</h3>
                    <section className="flex-column">
                        <label htmlFor="/">Email address</label>
                        <input className="mail-input" type="email" placeholder="abc@gmail.com" defaultValue={ hidden ? "adarshbalika@gmail.com" : ""} />
                        <label htmlFor="/">Password</label>
                        <section className="relative">
                            <input className="pass-input" type={showPassword ? "text" : "password"} placeholder="*************" defaultValue={hidden ? "1234adarsh" : ""} />

                            {
                                showPassword ? <img onClick={() => { setShowPassword(showPassword ? false : true) }} className="eye-style absolute" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5K6C73npel6hwg6iTFmOpiSdNVG4HUjG1g&usqp=CAU" alt="show password" /> : <img onClick={() => { setShowPassword(showPassword ? false : true) }} className="eye-style absolute"  />

                            }
                        </section>

                    </section>
                    <section className="flex jstfy-ctnt-spc-between">
                        <label htmlFor="/">
                            <input className="checkbox-inpt" type="checkbox" />
                            Remember me</label>
                        <Link to="/Forget" className="color">Forget Password?</Link>
                    </section>
                    <Link to="/text-editor">
                        <button onClick={() => {
                            setLogin( !login );
                            navigate(location.state.from.pathname);
                        }} className="w-100 ptb-8">Login</button>
                    </Link><br />

                        <button onClick={() => setHidden(true)} className="w-100 mtb-16 ptb-8">Login as a Guest</button>

                    <Link className="color block text-align" to="/Signup">Create New Account</Link>
                </div>
            </form>
        </>
    )
}

export { Login }