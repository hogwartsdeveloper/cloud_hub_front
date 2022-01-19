import axios from "axios";
import { API_URL } from "../config";
import { setFiles } from "../reducers/fileReducer";

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