import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
