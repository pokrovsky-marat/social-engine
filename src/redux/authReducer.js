const AUTH_USER = 'AUTH-USER';


let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false
}

function authReducer(state = initialState, action) {

    if (action.type === AUTH_USER) {
        return {...state, data: action.data, isAuth: true}
    }

    return state;
}


export function setAuthData(data) {
    return {type: AUTH_USER, data}
}

export default authReducer;