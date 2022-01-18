import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="logo">Cloud hub</NavLink>
            <ul>
                <li><NavLink to="/login">Войти</NavLink></li>
                <li><NavLink to="/signUp">Попробовать бесплатно</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;