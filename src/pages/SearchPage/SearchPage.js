import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderNavigation from '../../components/HeaderNav';
import PhotoList from '../../components/PhotoList';
import { showNavInput } from '../../redux/actions/actions';

import './SearchPage.css';

class SearchPage extends Component {
  componentDidMount() {
    this.props.showNavInput();
  }
  render() {
    const { nextPageStaticQuery, photos } = this.props;
    const errorMessage = `No result for "${nextPageStaticQuery}"`;
    const upFirst = nextPageStaticQuery[0].toUpperCase() + nextPageStaticQuery.slice(1);
    const requestResult = photos.length === 0 ? errorMessage : upFirst;

    return (
      <React.Fragment>
        <HeaderNavigation />
        <div className="search-page-info">
          <span>{requestResult} Photos</span>
        </div>
        <PhotoList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextPageStaticQuery: state.nextPageStaticQuery,
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showNavInput: (saveRequest) => dispatch(showNavInput(saveRequest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
