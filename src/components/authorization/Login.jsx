import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="box">
            
            <div className="container">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                <div className="form">
                    
                    <h2>Login Form</h2>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Login" />
                        </div>
                        <p className="forget">Forgot Password ? <a href="#">Click Here</a></p>
                        <p className="forget">Don't have an account ? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;