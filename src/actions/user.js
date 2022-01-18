import axios from "axios";
import { API_URL } from "../config";

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