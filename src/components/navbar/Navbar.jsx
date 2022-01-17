import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <header>
            <a href="#" className="logo">Cloud hub</a>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    );
};

export default Navbar;