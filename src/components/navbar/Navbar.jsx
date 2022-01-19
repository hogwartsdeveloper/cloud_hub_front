import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../reducers/userReducer";
import './navbar.css';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <NavLink to="/" className="logo">Cloud hub</NavLink>
            <ul>
                {!isAuth && <li><NavLink to="/signIn">Войти</NavLink></li>}
                {!isAuth && <li><NavLink to="/signUp">Попробовать бесплатно</NavLink></li>}
                {isAuth && <li><NavLink to="/" onClick={() => dispatch(logout())}>Выход</NavLink></li>}
            </ul>
        </div>
    );
};

export default Navbar;