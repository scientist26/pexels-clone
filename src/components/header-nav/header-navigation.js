import React from 'react';
import './header-navigation.css';

import SearchField from '../search-field/search-field';

function HeaderNavigation() {
  return (
    <nav className="header-nav">
      <a className="header-nav__logo" href="#/">
        <img src="icon/icon-pexels.png" alt="pexels-icon" className="header-nav__logo-icon"></img>
        <span>Pexels</span>
      </a>
      <SearchField />
      <ul className="header-nav__menu-list">
        <li className="header-nav__menu-item">
          <a href="#/">Explore</a>
        </li>
        <li className="header-nav__menu-item">
          <a href="#/">Licence</a>
        </li>
        <li className="header-nav__menu-item">
          <a href="#/">Upload</a>
        </li>
        <li className="header-nav__menu-item">
          <a href="#/">...</a>
        </li>
        <li className="header-nav__menu-item">
          <a className="header-nav__menu-item--btn" href="#/">
            Join
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
