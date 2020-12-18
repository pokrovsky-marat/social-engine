import c from "./Header.module.css";
import {NavLink, Redirect} from "react-router-dom";
let login = <NavLink to="/login">Login</NavLink>
function Header(props) {
    const logOut=()=>{
        props.authLogOut();
    }
    return (
        <header className={c.header}>
            <img
                src="http://pngimg.com/uploads/pokemon/pokemon_PNG23.png"
                alt="logo"
            />
            <div className={c.login}>
                {props.isAuth ? <div>{props.data.login}
                    <button onClick={logOut} className={c.logoutBtn}>Log out</button></div>  : login}

            </div>

        </header>
    );
}

export default Header;
