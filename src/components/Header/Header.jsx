import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink to="/" className={css.logo}>
          MovieApp
        </NavLink>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeNavLink}` : css.navLink
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeNavLink}` : css.navLink
            }
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
