import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import dirLogo from "../../../../asserts/img/dir.png"
import fileLogo from "../../../../asserts/img/file.svg"
import "./file.less"


const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

    return (
        <div className="file">
            <img src={file.type === "dir" ? dirLogo : fileLogo} alt="" className="file__img" />
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
            {file.type !== 'dir' && <button className="file__btn file__download">Скачать</button>}
            <button className="file__btn file__delete">Удалить</button>
        </div>
    );
};

export default File