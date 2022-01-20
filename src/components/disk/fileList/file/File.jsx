import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFile, downloadFile } from "../../../../actions/file";
import dirLogo from "../../../../asserts/img/dir.png"
import fileLogo from "../../../../asserts/img/file.svg"
import "./file.less"


const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

    function downloadClickHandler(event) {
        event.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(event) {
        event.stopPropagation()
        dispatch(deleteFile(file))
    }

    return (
        <div className="file">
            <img src={file.type === "dir" ? dirLogo : fileLogo} alt="" className="file__img" />
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
            {file.type !== 'dir' && <button className="file__btn file__download" onClick={(e) => downloadClickHandler(e)}>Скачать</button>}
            <button className="file__btn file__delete" onClick={(e) => deleteClickHandler(e)}>Удалить</button>
        </div>
    );
};

export default File