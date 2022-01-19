import React from "react";
import "./fileList.less";

const FileList = () => {
    return (
        <div className="fileList">
            <div className="fileList__header">
                <div className="fileList__name">Название</div>
                <div className="fileList__date">Дата</div>
                <div className="fileList__size">Размер</div>
            </div>
        </div>
    );
};

export default FileList;