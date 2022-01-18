import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="logo">Cloud hub</NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Авторизация</NavLink></li>
                <li><NavLink to="/signUp">Регистрация</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;