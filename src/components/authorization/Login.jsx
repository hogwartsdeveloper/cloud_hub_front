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
                    <h2>Войдите в свою учетную запись</h2>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="Адрес электронной почты" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Войти" />
                        </div>
                        <p className="forget">Don't have an account ? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;