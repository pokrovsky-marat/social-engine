import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";


const AUTH_USER = 'AUTH-USER';
const NULL_USER = 'NULL-USER';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

function authReducer(state = initialState, action) {

    if (action.type === AUTH_USER) {
        return {...state, isAuth: true, login: action.login, email: action.email, id: action.id}
    } else if (action.type === NULL_USER) {
        return {...state, isAuth: false, login: null, email: null, id: null}
    }

    return state;
}

export function setAuthData(data) {
    return {type: AUTH_USER, login: data.login, email: data.email, id: data.id}
}

export function nullAuthData() {
    return {type: NULL_USER}
}

export const authMe = () => {
    console.log("authMe")
    return (dispatch) => {
        return authApi.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(response.data));
            }
        });
    }
}
export const authLogOut = () => {
    return (dispatch) => {
        authApi.authLogOut().then((response) => {

            if (response.resultCode !== 0) {
                console.log("---Ошибка разлогинизации")
                console.log(response.messages);
                console.log(response.data)
            } else {
                dispatch(nullAuthData());
            }
        });
    }
}

export const authLogin = (data) => {
    return (dispatch) => {
        authApi.authLogin(data.email, data.password, data.rememberMe).then((response) => {
            if (response.resultCode !== 0) {
                dispatch(stopSubmit("login", {_error: "Wrong email or password"}));
                console.log("---Ошибка логинизации")
                console.log(response.messages);
                console.log(response.data)
            } else {
                dispatch(authMe());
            }
        });
    }
}


export default authReducer;