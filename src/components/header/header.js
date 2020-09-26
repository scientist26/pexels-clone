import React from 'react';
import './header.css';

import headerBackground from '../../constants/constants';
import HeaderNavigation from '../header-nav/header-navigation';
import SearchPanel from '../search-panel/search-panel';

function Header() {
  return (
    <header style={headerBackground} className="header">
      <HeaderNavigation />
      <SearchPanel />
    </header>
  );
}

export default Header;
