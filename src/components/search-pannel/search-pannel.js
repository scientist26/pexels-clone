import React from 'react';
import './search-pannel.css';

function SearchPannel() {
  return (
    <div className="header-nav__search-pannel">
      <form autocomplete="off" data-focused="false" className="search-pannel">
        <div className="search-pannel__container">
          <input
            className="search-pannel__input"
            autocapitalize="none"
            autocomplete="off"
            placeholder="Search for free photos"
            type="search"
          ></input>
          <button className="search-pannel__btn" title="Search for stock photos">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchPannel;
