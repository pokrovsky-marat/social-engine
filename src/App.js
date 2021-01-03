import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, NavLink, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import React, {Suspense} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {authMe} from "./redux/authReducer";
import {initApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {
    componentDidMount() {
        /*this.props.authMe();*/
        this.props.initApp();
    }

    render() {
        if (!this.props.appInit) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/profile/:userId?'>
                            <Suspense fallback={<div>Загрузка...</div>}>
                                <ProfileContainer/>
                            </Suspense>

                        </Route>
                        <Route path='/dialogs'>
                            <DialogsContainer/>
                        </Route>
                        <Route path='/users'>
                            <UsersContainer/>
                        </Route>
                        <Route path='/news'>
                            <News/>
                        </Route>
                        <Route path='/settings'>
                            <Settings/>
                        </Route>
                        <Route path='/music'>
                            <Music/>
                        </Route>
                        <Route path='/login'>
                            <Login/>
                        </Route>

                        <Route path='/'>
                            <h1> Заглушка </h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        appInit: state.app.appInit
    }

}
export default compose(/*withRouter,*/ connect(mapStateToProps, {authMe, initApp}))(App)

