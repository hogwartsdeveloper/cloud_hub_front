import React from "react";
import Navbar from "./navbar/Navbar";
import './welcomePage.css';
import airMan from '../asserts/img/character.png';
import facebookIcon from '../asserts/img/facebook.png';
import twitterIcon from '../asserts/img/twitter.png';
import instagramIcon from '../asserts/img/instagram.png';

const WelcomePage = () => {
    return (
        <>
            <div className="content">
                <h2>Cloud hub</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis dolore dignissimos, 
                    laborum unde hic doloremque eveniet voluptatem, sint culpa nulla, rem reprehenderit corrupti.
                    Ullam voluptate alias accusantium quas vitae?
                </p>
                <a href="#">Read More</a>
            </div>
            <div className="imgBx">
                <img src={airMan} alt="air man"/>
            </div>
            <ul className="sci">
                <li><a href="#"><img src={facebookIcon} alt="facebookIcon" /></a></li>
                <li><a href="#"><img src={twitterIcon} alt="twitterIcon" /></a></li>
                <li><a href="#"><img src={instagramIcon} alt="instagramIcon" /></a></li>
            </ul>
            <p className="copyrightText">&copy; 2022 Atanynbasy. All Right Reserved.</p>
        </>
    );
};

export default WelcomePage;