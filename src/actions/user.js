import axios from "axios";
import { API_URL } from "../config";
import { errorCreateAccount, setCreateAccount, setNoCreateAccount, setUser } from "../reducers/userReducer";
import { toast } from 'react-toastify';

export const registration = (firstName, lastName, email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/registration`, {
                firstName,
                lastName,
                email,
                password
            })

            toast.success('Аккаунт успешно создан!', {
                autoClose: 2000,
            });
            dispatch(setCreateAccount())
        } catch(e) {
            toast.error(e.response.data.message)
            e.response.data.errors.errors.map(error => 
                toast.error(error.msg)    
            )
            dispatch(setNoCreateAccount())
        }
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

            toast.success('Вы успешно вошли в систему!', {
                autoClose: 2000,
            });
        } catch(e) {
            toast.error(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('tokenchik', response.data.token)
        } catch(e) {
            localStorage.removeItem('tokenchik')
        }
    }
}

export const uploadAvatar = (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                {headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}}
            )
            dispatch(setUser(response.data))
            toast.success('Аватар успешно загружен!', {
                autoClose: 2000,
            });
        } catch(e) {
            toast.error("Аватар не загружен!")
        }
    }
}

export const deleteAvatar = () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('tokenchik')}`}}
            )
            dispatch(setUser(response.data))
            toast.success('Аватар успешно удален!', {
                autoClose: 2000,
            });
        } catch(e) {
            toast.error('Аватар не удален!', {
                autoClose: 2000,
            });
        }
    }
}