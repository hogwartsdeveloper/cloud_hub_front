import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { registration } from "../../actions/user";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
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
                            <Input type="text" placeholder="Имя" value={firstName} setValue={setFirstName} />
                        </div>
                        <div className="inputBox">
                            <Input type="text" placeholder="Фамилия" value={lastName} setValue={setLastName} />
                        </div>
                        <div className="inputBox">
                            <Input type="email" placeholder="Адрес электронной почты" value={email} setValue={setEmail} />
                        </div>
                        <div className="inputBox">
                            <Input type="password" placeholder="Пароль" value={password} setValue={setPassword} />
                        </div>
                        <div className="inputBox">
                            <Button onClick={() => registration(firstName, lastName, email, password)}>Начать бесплатно</Button>
                        </div>
                        <p className="forget">У вас уже есть аккаунт ? <NavLink to="/signIn">Войти</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;