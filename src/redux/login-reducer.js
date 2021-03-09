const SET_LOGIN_SUCCESSFUL = 'login/SET_LOGIN_SUCCESSFUL'
const SET_LOGIN_FAILED = 'login/SET_LOGIN_FAILED'
const SET_LOGOUT = 'login/SET_LOGOUT'
const SET_LOGIN_START = 'login/SET_LOGIN_START'

const initialState = {
    isLoggedIn: false,
    isAuthorization: false,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_START: {
            return { ...state, isLoggedIn: false, isAuthorization: true }
        }
        case SET_LOGIN_SUCCESSFUL: {
            return { ...state, isLoggedIn: true, isAuthorization: false }
        }
        case SET_LOGIN_FAILED: {
            return { ...state, isLoggedIn: false, isAuthorization: false }
        }
        case SET_LOGOUT: {
            return { ...state, isLoggedIn: false }
        }
        default: {
            return state
        }
    }
}

export const loginActions = {
    setLoginStart: () => ({ type: SET_LOGIN_START }),
    setLoginSuccessful: () => ({ type: SET_LOGIN_SUCCESSFUL }),
    setLoginFailed: () => ({ type: SET_LOGIN_FAILED }),
    setLogout: () => ({ type: SET_LOGOUT }),
}
