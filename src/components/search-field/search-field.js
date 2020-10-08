import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './search-field.css';

import { inputValueChange, searchPhoto, staticQuery } from '../../redux/actions/actions';
import withPhotoService from '../hoc/with-photo-service';

class SearchField extends Component {
  handleChange = (event) => {
    const { inputValueChange } = this.props;
    inputValueChange(event.target.value);
  };

  requestSearchData = (e) => {
    const { photoService, inputValue, staticQuery } = this.props;
    if (inputValue === '') {
      return;
    }

    staticQuery(inputValue);

    photoService.getSearchPhoto(inputValue).then((data) => {
      this.props.searchPhoto(data.photos);
    });
    this.props.history.push('/search');
    e.preventDefault();
  };

  handleSearch = (e) => {
    if (e.type === 'click') {
      return this.requestSearchData(e);
    }
    if (e.type === 'onSubmit') {
      return this.requestSearchData(e);
    }
  };

  render() {
    const { inputValue } = this.props;
    return (
      <div className="header-nav__search-field">
        <form autoComplete="off" data-focused="false" className="search-field">
          <div className="search-field__container">
            <input
              className="search-field__input"
              autoCapitalize="none"
              autoComplete="off"
              placeholder="Search for free photos"
              type="search"
              required
              value={inputValue}
              onChange={this.handleChange}
              onSubmit={this.handleSearch}
            ></input>
            <button
              className="search-field__btn"
              title="Search for stock photos"
              onClick={this.handleSearch}
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    nextPageStaticQuery: state.nextPageStaticQuery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputValueChange: (value) => dispatch(inputValueChange(value)),
    searchPhoto: (photos) => dispatch(searchPhoto(photos)),
    staticQuery: (query) => dispatch(staticQuery(query)),
  };
};

export default withRouter(
  withPhotoService()(connect(mapStateToProps, mapDispatchToProps)(SearchField))
);
