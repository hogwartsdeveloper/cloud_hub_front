import React from "react";
import { useDispatch } from "react-redux";
import { removeUploadFile } from "../../../reducers/uploadReducer";
import Button from "../../UI/button/Button";

const UploadFile = ({file}) => {
    const dispatch = useDispatch()
    return (
        <div className="upload-file">
            <div className="upload-file__header">
                <div className="upload-file__name">{file.name}</div>
                <Button className="upload-file__remove" onClick={() => dispatch(removeUploadFile(file.id))}>X</Button>
            </div>
            <div className="upload-file__progress-bar">
                <div className="upload-file__upload-bar" style={{width: file.progress + "%"}}/>
                <div className="upload-file__percent">{file.progress}%</div>
            </div>
        </div>
    );
};

export default UploadFile;