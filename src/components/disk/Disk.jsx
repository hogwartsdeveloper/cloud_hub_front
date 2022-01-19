import React from "react";
import "./disk.less";
import FileList from "./fileList/FileList";

const Disk = () => {
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