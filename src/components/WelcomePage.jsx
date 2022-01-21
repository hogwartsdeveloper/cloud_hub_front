import React from "react";
import './welcomePage.less';
import airMan from '../asserts/img/character.png';
import facebookIcon from '../asserts/img/facebook.png';
import twitterIcon from '../asserts/img/twitter.png';
import instagramIcon from '../asserts/img/instagram.png';
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className="containerWelcome">
            <div className="content">
                <h2>Безопасный и простой доступ к контенту</h2>
                <p>Вы можете хранить файлы и папки, а также работать над ними вместе с другими пользователями на компьютере или любом мобильном устройстве.
                </p>
                <NavLink to="/signUp">Попробовать бесплатно</NavLink>
            </div>
            <div className="imgBx">
                <img src={airMan} alt="air man"/>
            </div>
            <ul className="sci">
                <li><a href="#"><img src={facebookIcon} alt="facebookIcon" /></a></li>
                <li><a href="#"><img src={twitterIcon} alt="twitterIcon" /></a></li>
                <li><a href="#"><img src={instagramIcon} alt="instagramIcon" /></a></li>
            </ul>
            <p className="copyrightText">&copy; 2022 Atanynbasy. Все права защищены.</p>
        </div>
    );
};

export default WelcomePage;