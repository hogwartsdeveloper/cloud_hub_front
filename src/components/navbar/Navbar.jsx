import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFiles, searchFile } from "../../actions/file";
import { logout } from "../../reducers/userReducer";
import './navbar.css';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimout] = useState(false)
    const dispatch = useDispatch()

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout != false) {
            clearTimeout(searchTimeout)
        }

        if (e.target.value != '') {
            setSearchTimout(setTimeout((value) => {
                dispatch(searchFile(value))
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    return (
        <div className="navbar">
            <NavLink to="/" className="logo">Cloud hub</NavLink>
            {isAuth && <input type="text" placeholder="Название файла" onChange={(e) => searchChangeHandler(e)} value={searchName}/>}
            <ul>
                {!isAuth && <li><NavLink to="/signIn">Войти</NavLink></li>}
                {!isAuth && <li><NavLink to="/signUp">Попробовать бесплатно</NavLink></li>}
                {isAuth && <li><NavLink to="/" onClick={() => dispatch(logout())}>Выход</NavLink></li>}
            </ul>
        </div>
    );
};

export default Navbar;