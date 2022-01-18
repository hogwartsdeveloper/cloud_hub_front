import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { registration } from "../../actions/user";
import "./authorization.css";

const Registration = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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
                    <h2>Начать бесплатно</h2>
                    <div>
                        <div className="inputBox">
                            <input type="text" placeholder="Имя" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Фамилия" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Адрес электронной почты" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Начать бесплатно" onClick={() => registration(firstName, lastName, email, password)}/>
                        </div>
                        <p className="forget">У вас уже есть аккаунт ? <NavLink to="/signIn">Войти</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;