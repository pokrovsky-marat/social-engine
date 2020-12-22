import {authMe} from "./authReducer";

const APP_INIT = 'APP-INIT';

let initialState = {
    appInit: false
}

function appReducer(state = initialState, action) {
    if (action.type === APP_INIT) {
        return {...state, appInit: true}
    }
    return state;
}

export function initAppAC() {
    console.log("initAppAC")
    return {type: APP_INIT}
}

export const initApp = () => {
    return (dispatch) => {
       let authMePromise =  dispatch(authMe());
       console.log("initApp")
       Promise.all([authMePromise]).then(()=>{
           dispatch(initAppAC());
       })
    }
}





export default appReducer;