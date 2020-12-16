import {authApi} from "../api/api";

const AUTH_USER = 'AUTH-USER';
const NULL_USER = 'NULL-USER';


let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false
}

function authReducer(state = initialState, action) {
    console.log("authReducer")

    if (action.type === AUTH_USER) {
        return {...state, data: action.data, isAuth: true}
    } else if (action.type === NULL_USER) {
        return {...state, data: action.data, isAuth: false}
    }

    return state;
}

export function setAuthData(data) {
    return {type: AUTH_USER, data}
}

export function nullAuthData(data) {
    return {type: NULL_USER, data}
}

export const authMe = () => {
    return (dispatch) => {
        authApi.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(response.data));
            }
        });
    }
}
export const authLogOut = () => {
    return (dispatch) => {
        authApi.authLogOut().then((response) => {
            debugger
            if (response.resultCode !== 0) {
                console.log("---Ошибка разлогинизации")
                console.log(response.messages);
                console.log(response.data)
            } else {
                dispatch(nullAuthData(null));
            }
        });
    }
}

export const authLogin = (data) => {
    return (dispatch) => {
        authApi.authLogin(data.email, data.password, data.rememberMe).then((response) => {
            if (response.resultCode !== 0) {
                console.log("---Ошибка логинизации")
                console.log(response.messages);
                console.log(response.data)
            } else {
                authApi.authMe().then((response) => {
                    if (response.resultCode === 0) {
                        dispatch(setAuthData(response.data));
                    }
                });
            }
        });
    }
}


export default authReducer;