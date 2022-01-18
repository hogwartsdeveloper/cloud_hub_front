import React from "react";
import { NavLink } from "react-router-dom";
import "./authorization.css";

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
                        <p className="forget">У вас нет аккаунта ? <NavLink to="/signUp">Зарегистрироваться</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;