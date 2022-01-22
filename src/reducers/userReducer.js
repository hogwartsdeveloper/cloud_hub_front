const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SET_CREATE_ACCOUNT = "SET_CREATE_ACCOUNT"
const SET_NO_CREATE_ACCOUNT = "ERROR_CREATE_ACCOUNT"

const defaultState = {
    currentUser: {},
    isAuth: false,
    isCreateAccount: false
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
        case SET_CREATE_ACCOUNT:
            return {
                ...state,
                isCreateAccount: true
            }
        case SET_NO_CREATE_ACCOUNT:
            return {
                ...state,
                isCreateAccount: false
            }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const setCreateAccount = () => ({type: SET_CREATE_ACCOUNT})
export const setNoCreateAccount = () => ({type: SET_NO_CREATE_ACCOUNT})