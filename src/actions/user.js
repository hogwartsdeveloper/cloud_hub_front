import axios from "axios";
import { API_URL } from "../config";
import { setUser } from "../reducers/userReducer";

export const registration = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            firstName,
            lastName,
            email,
            password
        })

        alert(response.data.message)
    } catch(e) {
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('tokenchik', response.data.token)
        } catch(e) {
            alert(e.response.data.message)
        }
    }
}