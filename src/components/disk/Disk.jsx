import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFiles } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";
import "./disk.less";
import FileList from "./fileList/FileList";
import Popup from "./Popup";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])
    
    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }
    return (
        <div className="containerDisk">
            <div className="disk">
                <div className="disk__btns">
                    <button className="disk__back">Назад</button>
                    <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
                    <div className="disk__upload">
                        <label htmlFor="" className="disk__upload-label">Загрузить файл</label>
                        <input multiple={true} type="file" id="disk__upload-input" className="disk__upload-input" />
                    </div>
                </div>
                <FileList />
                <Popup />
            </div>
        </div>
        
    );
};

export default Disk;