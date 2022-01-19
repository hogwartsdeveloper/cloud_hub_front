import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createDir } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";
import "./disk.less";


const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        setDirName('')
        dispatch(setPopupDisplay('none'))
    }

    return (
        <div
            className="popup"
            style={{display: popupDisplay}}
            onClick={() => dispatch(setPopupDisplay('none'))}
        >
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <input type="text" placeholder="Введите название папки" value={dirName} onChange={(event) => setDirName(event.target.value)}/>
                <button className="popup__create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    );
};

export default Popup;