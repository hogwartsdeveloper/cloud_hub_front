import React from "react";

const Disk = () => {
    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__back">Назад</button>
                <button className="disk__create">Создать папку</button>
                <div className="disk__upload">
                    <label htmlFor="" className="disk__upload-label">Загрузить файл</label>
                    <input multiple={true} type="file" id="disk__upload-input" className="disk__upload-input" />
                </div>
            </div>
        </div>
    );
};

export default Disk;