import React from "react";
import './welcomePage.less';
import airMan from '../asserts/img/character.png';
import githubIcon from '../asserts/img/github.svg';
import linkedinIcon from '../asserts/img/linkedin.svg';
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
                <li><a rel="noreferrer" href="https://www.linkedin.com/in/%D0%B6%D0%B0%D0%BD%D0%BD%D1%83%D1%80-%D0%B0%D1%85%D0%BC%D0%B5%D1%82%D1%85%D0%B0%D0%BD%D0%BE%D0%B2-30b709210/" target="_blank"><img src={linkedinIcon} alt="linkedinIcon" /></a></li>
                <li><a rel="noreferrer" href="https://github.com/hogwartsdeveloper" target="_blank"><img src={githubIcon} alt="githubIcon" /></a></li>
            </ul>
            <p className="copyrightText">&copy; 2022 Atanynbasy. Все права защищены.</p>
        </div>
    );
};

export default WelcomePage;