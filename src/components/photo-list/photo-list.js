import React, { Component } from 'react';
import { connect } from 'react-redux';
import './photo-list.css';

import { photosLoaded, nextPage } from '../../redux/actions/actions';

import withPhotoService from '../hoc/with-photo-service';
import PhotoItem from '../photo-item/photo-item';

class PhotoList extends Component {
  componentDidMount() {
    const { photoService } = this.props;
    photoService.getStartPhoto().then((data) => {
      console.log(data);
      this.props.photosLoaded(data.photos);
    });
  }

  onHanldeScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    const { photoService, page } = this.props;
    photoService.getNextPhoto(page).then((data) => {
      console.log(data);
      this.props.nextPage(data.photos);
    });
  }

  componentDidUpdate() {
    // window.addEventListener('scroll', this.onHanldeClick);
    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      const { photoService, page } = this.props;
      photoService.getNextPhoto(page).then((data) => {
        console.log(data);
        this.props.nextPage(data.photos);
      });
    });
  }

  render() {
    const { photos } = this.props;
    return (
      <section className="photo">
        <ul className="photo-list">
          {photos.map((photo) => {
            return (
              <li key={photo.id}>
                <PhotoItem photo={photo} onNextPage={() => this.onHanldeScroll()} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    page: state.page,
  };
};

// const mapDispatchToProps = {
//   photosLoaded,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    photosLoaded: (photos) => dispatch(photosLoaded(photos)),
    nextPage: (photos) => dispatch(nextPage(photos)),
  };
};

export default withPhotoService()(connect(mapStateToProps, mapDispatchToProps)(PhotoList));
