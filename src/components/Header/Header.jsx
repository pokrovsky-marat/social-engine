import c from "./Header.module.css";
function Header() {
  return (
    <header className={c.header}>
      <img
        src="http://pngimg.com/uploads/pokemon/pokemon_PNG23.png"
        alt="logo"
      />
    </header>
  );
}
export default Header;
