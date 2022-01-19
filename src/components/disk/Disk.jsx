import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFiles } from "../../actions/file";
import "./disk.less";
import FileList from "./fileList/FileList";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])
    
    return (
        <div className="containerDisk">
            <div className="disk">
                <div className="disk__btns">
                    <button className="disk__back">Назад</button>
                    <button className="disk__create">Создать папку</button>
                    <div className="disk__upload">
                        <label htmlFor="" className="disk__upload-label">Загрузить файл</label>
                        <input multiple={true} type="file" id="disk__upload-input" className="disk__upload-input" />
                    </div>
                </div>
                <FileList />
            </div>
        </div>
        
    );
};

export default Disk;