import "./App.css";
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">


                    <Switch>
                        <Route path='/profile'>
                            <Profile profilePage={props.state.profilePage}
                                     addPost={props.addPost}
                                     changePost={props.changePost}   />
                        </Route>
                        <Route path='/dialogs'>
                            <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                     messages={props.state.dialogsPage.messages}/>
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
