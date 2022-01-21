import axios from "axios";
import { API_URL } from "../config";
import { addFile, deleteFileAction, setFiles } from "../reducers/fileReducer";
import { addUploader, changeUploadFile, showUploader } from "../reducers/uploadReducer";
import { showLoader, hideLoader } from "../reducers/appReducer";

export function getFiles(dirId, sort) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            let url = `${API_URL}api/files`
            if (dirId) {
                url = `${API_URL}api/files?parent=${dirId}`
            }
            if (sort) {
                url = `${API_URL}api/files?sort=${sort}`
            }
            if (dirId && sort) {
                url = `${API_URL}api/files?parent=${dirId}&sort=${sort}`
            }

            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}
            })
            dispatch(setFiles(response.data))
        } catch(e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
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
            if (dirId) {
                formData.append('parent', dirId)
            }
            const uploadFile = {name: file.name, progress: 0, id: Date.now()}
            dispatch(showUploader())
            dispatch(addUploader(uploadFile))
            const response = await axios.post(`${API_URL}api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    if (totalLength) {
                        uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        dispatch(changeUploadFile(uploadFile))
                    }
                }
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export async function downloadFile(file) {
    const response = await fetch(`${API_URL}api/files/download?id=${file._id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenchik')}`
        }
    })
    if (response.status === 200) {
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
    console.log(file)
}

export function deleteFile(file) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files?id=${file._id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tokenchik')}`
                }
            })
            dispatch(deleteFileAction(file._id))
            alert(response.data.message)
            console.log(file)
        } catch(e) {
            alert(e.response.data.message)
        }
    }
}

export function searchFile(search) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/files/search?search=${search}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tokenchik')}`
                }
            })
            dispatch(setFiles(response.data))
        } catch(e) {
            alert(e.response.data.message)
        }
    }
}