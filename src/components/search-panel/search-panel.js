import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './search-panel.css';

import { photosLoaded, staticQuery } from '../../redux/actions/actions';
import withPhotoService from '../hoc/with-photo-service';
import SearchField from '../search-field/search-field';
import { searchOffer } from '../../constants/constants';

const shuffleOffer = searchOffer.sort(() => 0.5 - Math.random()).slice(0, 7);

class SearchPanel extends Component {
  searchStaticQuery(query) {
    const { photoService, photosLoaded, staticQuery } = this.props;
    staticQuery(query);
    photoService.getSearchPhoto(query).then((data) => {
      photosLoaded(data.photos);
    });
  }
  render() {
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
                  <Link
                    className="popular-tag"
                    to="/search"
                    onClick={() => this.searchStaticQuery(offer.value)}
                  >
                    {offer.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    photosLoaded: (photos) => dispatch(photosLoaded(photos)),
    staticQuery: (query) => dispatch(staticQuery(query)),
  };
};

export default withPhotoService()(connect(mapStateToProps, mapDispatchToProps)(SearchPanel));
