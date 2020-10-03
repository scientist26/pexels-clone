import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './header-navigation.css';
import * as actions from '../../redux/actions/actions';

import SearchField from '../search-field/search-field';

function HeaderNavigation({ nextPage, nextRnd }) {
  return (
    <nav className="header-nav">
      <a className="header-nav__logo" href="#/">
        <img src="icon/icon-pexels.png" alt="pexels-icon" className="header-nav__logo-icon"></img>
        <span>Pexels</span>
      </a>
      <SearchField />
      <ul className="header-nav__menu-list">
        <li className="header-nav__menu-item">
          <a href="#/" onClick={nextPage}>
            Explore
          </a>
        </li>
        <li className="header-nav__menu-item">
          <a href="#/" onClick={nextRnd}>
            Licence
          </a>
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

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigation);

export default connect(mapStateToProps, actions)(HeaderNavigation);
