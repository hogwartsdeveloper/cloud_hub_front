import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { login } from "../../actions/user";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import "./authorization.less";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

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
                            <Input type="text" placeholder="Адрес электронной почты" value={email} setValue={setEmail} />
                        </div>
                        <div className="inputBox">
                            <Input type="password" placeholder="Пароль" value={password} setValue={setPassword} />
                        </div>
                        <div className="inputBox">
                            <Button onClick={() => dispatch(login(email, password))}>Войти</Button>
                        </div>
                        <p className="forget">У вас нет аккаунта ? <NavLink to="/signUp">Зарегистрироваться</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;