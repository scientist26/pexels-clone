import React from 'react';
import './search-field.css';

function SearchField() {
  return (
    <div className="header-nav__search-field">
      <form autocomplete="off" data-focused="false" className="search-field">
        <div className="search-field__container">
          <input
            className="search-field__input"
            autocapitalize="none"
            autocomplete="off"
            placeholder="Search for free photos"
            type="search"
          ></input>
          <button className="search-field__btn" title="Search for stock photos">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchField;
