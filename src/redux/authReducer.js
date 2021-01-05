import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";


const AUTH_USER = 'AUTH-USER';
const NULL_USER = 'NULL-USER';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

function authReducer(state = initialState, action) {

    if (action.type === AUTH_USER) {
        return {...state, isAuth: true, login: action.login, email: action.email, id: action.id}
    } else if (action.type === NULL_USER) {
        return {...state, isAuth: false, login: null, email: null, id: null}
    } else if (action.type === SET_CAPTCHA_URL) {
        return {...state, captchaUrl: action.url}
    }

    return state;
}

export function setAuthData(data) {
    return {type: AUTH_USER, login: data.login, email: data.email, id: data.id}
}

export function nullAuthData() {
    return {type: NULL_USER}
}

export function setCaptchaUrl(url) {
    return {type: SET_CAPTCHA_URL, url}
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
        authApi.authLogin(data).then((response) => {

            if (response.resultCode !== 0) {
                if (response.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                dispatch(stopSubmit("login", {_error: response.messages[0]}));

            } else {
                dispatch(authMe());
            }
        });
    }
}
export const getCaptchaUrl = () => {
    return (dispatch) => {
        securityApi.getCaptchaUrl().then((response) => {
            dispatch(setCaptchaUrl(response.url))
        });
    }
}


export default authReducer;