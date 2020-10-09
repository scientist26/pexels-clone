import React, { Component } from 'react';
import { connect } from 'react-redux';
import './photo-list.css';

import {
  photosLoaded,
  nextPage,
  changeLoad,
  showModalWindow,
  hideModalWindow,
  hideModalWindowBtn,
  photosError,
} from '../../redux/actions/actions';

import withPhotoService from '../hoc/with-photo-service';
import PhotoItem from '../photo-item/photo-item';
import Spinner from '../spinner/spinner';
import Portal from '../portal/portal';
import Modal from '../modal/modal';
import ErrorIndicator from '../error-indicator/error-indicator';

class PhotoList extends Component {
  componentDidMount() {
    const { photoService, photosError } = this.props;
    photoService
      .getStartPhoto()
      .then((data) => {
        this.props.photosLoaded(data.photos);
      })
      .catch((err) => photosError(err));
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onShowModalWindow = (photo) => {
    this.props.showModalWindow(photo);
  };

  onHideModalWindow = (event) => {
    if (event.target.classList.contains('modal-wrapper')) {
      this.props.hideModalWindow();
    }
  };

  onHideModalWindowBtn = () => {
    this.props.hideModalWindowBtn();
  };

  onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    const { photoService, page, loading, nextPageStaticQuery } = this.props;
    if (!loading) {
      this.props.changeLoad();
      photoService
        .getNextPhoto(page, nextPageStaticQuery)
        .then((data) => {
          this.props.nextPage(data.photos);
        })
        .catch((err) => photosError(err));
    }
  };

  render() {
    const { photos, loading, isShowModal, error } = this.props;

    const modal = isShowModal ? (
      <Portal>
        <Modal
          onHideModalWindow={this.onHideModalWindow}
          onHideModalWindowBtn={this.onHideModalWindowBtn}
        ></Modal>
      </Portal>
    ) : null;
    return (
      <section className="photo">
        <ul className="photo-list">
          {photos.map((photo) => {
            return (
              <li key={photo.id}>
                <PhotoItem photo={photo} onShowModalWindow={() => this.onShowModalWindow(photo)} />
              </li>
            );
          })}
          {loading && <Spinner />}
          {error && <ErrorIndicator />}
        </ul>
        {modal}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    page: state.page,
    loading: state.loading,
    isShowModal: state.isShowModal,
    nextPageStaticQuery: state.nextPageStaticQuery,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    photosLoaded: (photos) => dispatch(photosLoaded(photos)),
    nextPage: (photos) => dispatch(nextPage(photos)),
    changeLoad: () => dispatch(changeLoad()),
    showModalWindow: (photo) => dispatch(showModalWindow(photo)),
    hideModalWindow: () => dispatch(hideModalWindow()),
    hideModalWindowBtn: () => dispatch(hideModalWindowBtn()),
    photosError: (error) => dispatch(photosError(error)),
  };
};

export default withPhotoService()(connect(mapStateToProps, mapDispatchToProps)(PhotoList));
