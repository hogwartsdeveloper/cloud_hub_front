import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFiles, uploadFile } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";
import "./disk.less";
import FileList from "./fileList/FileList";
import Popup from "./Popup";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const [dragEnter, setDragEnter] = useState(false)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])
    
    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    return ( !dragEnter ?
        <div className="containerDisk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className="disk">
                <div className="disk__btns">
                    <button className="disk__back">Назад</button>
                    <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
                    <div className="disk__upload">
                        <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
                        <input
                            onChange={(event) => fileUploadHandler(event)} 
                            multiple={true} 
                            type="file" 
                            id="disk__upload-input" 
                            className="disk__upload-input" 
                        />
                    </div>
                </div>
                <FileList />
                <Popup />
            </div>
        </div>
        :
        <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
        
    );
};

export default Disk;