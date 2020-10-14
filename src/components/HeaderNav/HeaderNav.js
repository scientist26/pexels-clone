import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

import SearchField from '../SearchField';

function HeaderNavigation() {
  return (
    <nav className="header-nav">
      <Link className="header-nav__logo" to="/">
        <img src="/icon/icon-pexels.png" alt="pexels-icon" className="header-nav__logo-icon"></img>
        <span>Pexels</span>
      </Link>
      <SearchField />
      <ul className="header-nav__menu-list">
        <li className="header-nav__menu-item">
          <Link to="/">Explore</Link>
        </li>
        <li className="header-nav__menu-item">
          <Link to="/">Licence</Link>
        </li>
        <li className="header-nav__menu-item">
          <Link to="/">Upload</Link>
        </li>
        <li className="header-nav__menu-item">
          <Link to="/">...</Link>
        </li>
        <li className="header-nav__menu-item">
          <Link className="header-nav__menu-item--btn" to="/">
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
