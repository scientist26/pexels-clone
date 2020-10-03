import React from 'react';
import './search-field.css';

const SearchField = () => {
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
          ></input>
          <button className="search-field__btn" title="Search for stock photos">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
