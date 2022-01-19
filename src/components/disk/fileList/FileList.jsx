import React from "react";
import { useSelector } from "react-redux";
import File from "./file/File";
import "./fileList.less";

const FileList = () => {
    const files = useSelector(state => state.files.files)

    if (files.length === 0) {
        return (
            <div className="loader">Файлы не найдены</div>
        )
    }
    return (
        <div className="fileList">
            <div className="fileList__header">
                <div className="fileList__name">Название</div>
                <div className="fileList__date">Дата</div>
                <div className="fileList__size">Размер</div>
            </div>
            {files.map(file => 
                <File file={file} />
            )}
        </div>
    );
};

export default FileList;