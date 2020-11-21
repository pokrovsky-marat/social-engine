import c from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={c.nav}>
            <div>
                <NavLink activeClassName={c.active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={c.active} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink activeClassName={c.active} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink activeClassName={c.active} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink activeClassName={c.active} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
