import React from 'react';
import './search-panel.css';

import SearchField from '../search-field/search-field';

function SearchPanel() {
  return (
    <section className="header-search-panel">
      <h1 className="header-search-panel__title">
        The best free stock photos & videos shared by talented creators.
      </h1>
      <SearchField />
      <div className="header-search-panel__tags">
        <span className="header-search-panel__tags__suggest">Suggested: </span>
        <ul className="header-search-panel__tags__list">
          <li className="header-search-panel__tags__item">
            <a className="popular-tag" href="#/">
              cat
            </a>
          </li>
          <li className="header-search-panel__tags__item">
            <a className="popular-tag" href="#/">
              dog
            </a>
          </li>
          <li className="header-search-panel__tags__item">
            <a className="popular-tag" href="#/">
              animal
            </a>
          </li>
          <li className="header-search-panel__tags__item">
            <a className="popular-tag" href="#/">
              closes
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SearchPanel;
