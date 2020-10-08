import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderNavigation from '../../header-nav/header-navigation';
import PhotoList from '../../photo-list/photo-list';

import './search-page.css';

class SearchPage extends Component {
  render() {
    const { nextPageStaticQuery } = this.props;
    const upFirst = nextPageStaticQuery[0].toUpperCase() + nextPageStaticQuery.slice(1);
    return (
      <React.Fragment>
        <HeaderNavigation />
        <div className="search-page-info">
          <span>{upFirst} Photos</span>
        </div>
        <PhotoList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextPageStaticQuery: state.nextPageStaticQuery,
  };
};

export default connect(mapStateToProps)(SearchPage);
