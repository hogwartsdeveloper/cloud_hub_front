import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFiles, uploadFile } from "../../actions/file";
import { setCurrentDir, setFileView, setPopupDisplay } from "../../reducers/fileReducer";
import Button from "../UI/button/Button";
import Loader from "../UI/loader/Loader";
import "./disk.less";
import FileList from "./fileList/FileList";
import Popup from "./Popup";
import Uploader from "./uploader/Uploader";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const [dragEnter, setDragEnter] = useState(false)
    const dirStack = useSelector(state => state.files.dirStack)
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const loader = useSelector(state => state.app.loader)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, dispatch, sort])
    
    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
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

    if (loader) {
        return (
            <Loader />
        )
    }

    return ( !dragEnter ?
        <div 
            className="containerDisk" 
            style={popupDisplay === 'flex' ? {position: 'static'} : {position: 'relative'}} 
            onDragEnter={dragEnterHandler} 
            onDragLeave={dragLeaveHandler} 
            onDragOver={dragEnterHandler}
        >
            <div className="disk">
                <div className="disk__btns">
                    <Button className="disk__back" onClick={() => backClickHandler()}>Назад</Button>
                    <Button className="disk__create" onClick={() => showPopupHandler()}>Создать</Button>
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
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="disk__select"
                    >
                        <option value="name">По имени</option>
                        <option value="type">По типу</option>
                        <option value="date">По дате</option>
                    </select>
                    <div className="disk__plate" onClick={() => dispatch(setFileView('plate'))} />
                    <div className="disk__list" onClick={() => dispatch(setFileView('list'))} />
                </div>
                <FileList />
                <Popup />
                <Uploader />
            </div>
        </div>
        :
        <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
        
        
    );
};

export default Disk;