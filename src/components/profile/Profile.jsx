import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAvatar, uploadAvatar } from "../../actions/user";
import avatarLogo from "../../asserts/img/avatar.svg";
import { API_URL } from "../../config";
import sizeFormat from "../../utils/sizeFormat";
import Button from "../UI/button/Button";
import "./profile.less";

const Profile = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    function progress() {
        
        let number = document.getElementById("number")
        let busy = Math.round((currentUser.usedSpace / currentUser.diskSpace) * 100)
        document.documentElement.style.setProperty('--progress', `${472 - 472 * (busy / 100)}`)
        let counter = 0
        setInterval(() => {
            if(counter === busy) {
                clearInterval();
            } else {
                counter += 1;
                number.innerHTML = counter + "%";
            }
        }, 75)
    }

    useEffect(() => {
        progress()
    })

    return (
        <div className="containerDisk">
            <div className="profile">
                <div className="profile__img">
                    <div className="profile__imgBox">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="profile__imgBtn">
                        <label htmlFor="upload__avatar">Загрузить</label>
                        <Button onClick={() => dispatch(deleteAvatar())}>Удалить</Button>
                        <input id="upload__avatar" accept="image/*" onChange={e => changeHandler(e)} type="file" placeholder="Загрузите аватар" />
                    </div>
                </div>
                <div className="profile__data">
                    <h2>Данные о пользователе</h2>
                    <div className="profile__dataDiv">{currentUser.firstName + ' | '}{currentUser.lastName}</div>
                    <div className="profile__dataDiv">{currentUser.email}</div>
                    <div className="profile__dataDiv">{sizeFormat(currentUser.diskSpace)}</div>
                    <div className="profile__dataDiv">{sizeFormat(currentUser.usedSpace)}</div>

                    <div className="progress">
                        <div className="progress__outer">
                            <div className="progress__inner">
                                <div id="number">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Profile;