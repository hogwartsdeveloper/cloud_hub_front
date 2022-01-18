import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#" className="logo">Cloud hub</a>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><NavLink to="/login">Авторизация</NavLink></li>
                <li><NavLink to="/signUp">Регистрация</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;