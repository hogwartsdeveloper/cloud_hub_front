import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { login } from "../../actions/user";
import "./authorization.css";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    <div>
                        <div className="inputBox">
                            <input type="text" placeholder="Адрес электронной почты" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Войти" onClick={() => login(email, password)}/>
                        </div>
                        <p className="forget">У вас нет аккаунта ? <NavLink to="/signUp">Зарегистрироваться</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;