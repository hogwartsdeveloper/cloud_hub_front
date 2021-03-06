import React from "react";
import { useSelector } from "react-redux";
import File from "./file/File";
import "./fileList.css";

const FileList = () => {
    const files = useSelector(state => state.files.files)
    const fileView = useSelector(state => state.files.view)

    if (files.length === 0) {
        return (
            <div className="loader">Файлы не найдены</div>
        )
    }

    if (fileView === 'plate') {
        return (
            <div className="filePlate">
                {files.map(file => 
                    <File key={file._id} file={file} />
                )}
            </div>
        )
    }

    if (fileView === 'list') {
        return (
            <div className="fileList">
                <div className="fileList__header">
                    <div className="fileList__name">Название</div>
                    <div className="fileList__date">Дата</div>
                    <div className="fileList__size">Размер</div>
                </div>
                {files.map(file => 
                    <File key={file._id} file={file} />
                )}
            </div>
        );
    }
};

export default FileList;