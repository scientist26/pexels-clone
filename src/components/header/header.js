import React from 'react';
import './header.css';

import headerBackground from '../../constants/constants';
import HeaderNavigation from '../header-nav/header-navigation';

function Header() {
  return (
    <div style={headerBackground} className="header">
      <HeaderNavigation />
    </div>
  );
}

export default Header;
