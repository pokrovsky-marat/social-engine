import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.store = store;
export default store;
