import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>    <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/profile/:userId?'>
                            <ProfileContainer />
                        </Route>
                        <Route path='/dialogs'>
                            <DialogsContainer />
                        </Route>
                        <Route path='/users'>
                            <UsersContainer />
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
                        <Route path='/'>
                            <h1> Заглушка </h1>
                        </Route>
                    </Switch>
                </div>

            </div>
        </BrowserRouter>

    );
};
export default App;
