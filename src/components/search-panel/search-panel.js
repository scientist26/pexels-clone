import React from 'react';
import './search-panel.css';

import SearchField from '../search-field/search-field';
import { searchOffer } from '../../constants/constants';

const shuffleOffer = searchOffer.sort(() => 0.5 - Math.random()).slice(0, 7);

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
          {shuffleOffer.map((offer) => {
            return (
              <li key={offer.key} className="header-search-panel__tags__item">
                <a className="popular-tag" href="#/">
                  {offer.value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SearchPanel;
