import React from "react";
import "./login.css";

const Registration = () => {
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
                    <form>
                        <div className="inputBox">
                            <input type="email" placeholder="Адрес электронной почты" />
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Имя" />
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Фамилия" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Начать бесплатно" />
                        </div>
                        <p className="forget">У вас уже есть аккаунт ? <a href="#">Войти</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Registration;