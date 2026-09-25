import { NavLink } from "react-router";
import './Header.css';

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          GitHub Explorer
        </div>

        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Search
          </NavLink>

          <NavLink to="/favorites" className="header__link">
            Favorites
          </NavLink>
        </nav>
      </header>
    </>
  );
}