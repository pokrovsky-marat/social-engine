import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
let login = <NavLink to="/login">Login</NavLink>
function Header(props) {
    return (
        <header className={c.header}>
            <img
                src="http://pngimg.com/uploads/pokemon/pokemon_PNG23.png"
                alt="logo"
            />
            <div className={c.login}>
                {props.isAuth ? props.data.login : login}

            </div>

        </header>
    );
}

export default Header;
