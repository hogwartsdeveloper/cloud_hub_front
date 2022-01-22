import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import { registration } from "../../actions/user";
import { setNoCreateAccount } from "../../reducers/userReducer";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import "./authorization.less";

const Registration = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isCreateAccount = useSelector(state => state.user.isCreateAccount)
    const dispatch = useDispatch()

    if (isCreateAccount) {
        return (
            <Navigate to="/signIn" />
        )   
    }

    function registerHandler() {
        dispatch(registration(firstName, lastName, email, password))
       
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

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
                            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
                        </div>
                        <div className="inputBox">
                            <Button onClick={() => registerHandler()}>Начать бесплатно</Button>
                        
                        </div>
                        <p className="forget">У вас уже есть аккаунт ? <NavLink to="/signIn">Войти</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;