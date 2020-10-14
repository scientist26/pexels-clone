import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

import withPhotoService from '../../hoc';
import { backgroundPhotoLoaded } from '../../redux/actions/actions';

import HeaderNavigation from '../HeaderNav';
import SearchPanel from '../SearchPanel';
import Spinner from '../Spinner';
import renderBackground from '../../utils';

const randomBackgroundImg = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

class Header extends Component {
  componentDidMount() {
    const { photoService } = this.props;
    photoService.getBackgroundPhoto().then((data) => {
      const randomImg = randomBackgroundImg(data.photos);
      this.props.backgroundPhotoLoaded(randomImg, randomImg.src.landscape);
    });
  }

  render() {
    const { backgroundPhoto, backgroundSrc, backgroundLoad } = this.props;
    return (
      <>
        {backgroundLoad ? (
          <Spinner />
        ) : (
          <header style={renderBackground(backgroundSrc)} className="header">
            <HeaderNavigation />
            <SearchPanel />
            <a
              className="header-author-link"
              href={backgroundPhoto.photographer_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{backgroundPhoto.photographer}</span>
            </a>
          </header>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundPhoto: state.backgroundPhoto,
    backgroundSrc: state.backgroundSrc,
    backgroundLoad: state.backgroundLoad,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    backgroundPhotoLoaded: (backgroundPhoto, src) =>
      dispatch(backgroundPhotoLoaded(backgroundPhoto, src)),
  };
};

export default withPhotoService(connect(mapStateToProps, mapDispatchToProps)(Header));
