import axios from "axios";
import { API_URL } from "../config";
import { addFile, setFiles } from "../reducers/fileReducer";

export function getFiles(dirId) {
    return async dispatch => {
        try {
            let url = `${API_URL}api/files`
            if (dirId) {
                url = `${API_URL}api/files?parent=${dirId}`
            }

            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}
            })
            dispatch(setFiles(response.data))
        } catch(e) {
            alert(e.response.data.message)
        }
    }
}

export function createDir(dirId, name) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/files`, {
                name,
                type: 'dir',
                parent: dirId
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}
            })
            dispatch(addFile(response.data))
        } catch(e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            if(dirId) {
                formData.append('parent', dirId)
            }

            const response = await axios.post(`${API_URL}api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}