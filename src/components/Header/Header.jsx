import c from "./Header.module.css";

function Header(props) {
    debugger
    return (
        <header className={c.header}>
            <img
                src="http://pngimg.com/uploads/pokemon/pokemon_PNG23.png"
                alt="logo"
            />
            <div className={c.login}>
                {props.isAuth ? props.data.login : "Login"}
            </div>

        </header>
    );
}

export default Header;
