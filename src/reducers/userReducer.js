const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SET_SIGNIN = "SET_SIGNIN"
const ERROR_SIGNIN = "ERROR_SIGNIN"

const defaultState = {
    currentUser: {},
    isAuth: false,
    isSignIn: false
}

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('tokenchik')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case SET_SIGNIN:
            return {
                ...state,
                isSignIn: true
            }
        case ERROR_SIGNIN:
            return {
                ...state,
                isSignIn: false
            }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const setSignIn = () => ({type: SET_SIGNIN})
export const errorSignIn = () => ({type: ERROR_SIGNIN})