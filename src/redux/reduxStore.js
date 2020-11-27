import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({dialogsPage: dialogsPageReducer, profilePage: profilePageReducer})
let store = createStore(reducers);
export default store;
