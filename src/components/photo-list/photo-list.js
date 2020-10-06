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
} from '../../redux/actions/actions';

import withPhotoService from '../hoc/with-photo-service';
import PhotoItem from '../photo-item/photo-item';
import Spinner from '../spinner/spinner';
import Portal from '../portal/portal';
import Modal from '../modal/modal';

class PhotoList extends Component {
  componentDidMount() {
    const { photoService } = this.props;
    photoService.getStartPhoto().then((data) => {
      console.log(data);
      this.props.photosLoaded(data.photos);
    });
  }

  // onHanldeScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   ) {
  //     return;
  //   }
  //   const { photoService, page } = this.props;
  //   photoService.getNextPhoto(page).then((data) => {
  //     console.log(data);
  //     this.props.nextPage(data.photos);
  //   });
  // }

  onShowModalWindow = () => {
    this.props.showModalWindow();
  };

  onHideModalWindow = (event) => {
    if (event.target.classList.contains('modal-wrapper')) {
      this.props.hideModalWindow();
    }
  };

  onHideModalWindowBtn = () => {
    this.props.hideModalWindowBtn();
  };

  componentDidUpdate() {
    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      const { photoService, page, loading } = this.props;
      this.props.changeLoad();
      if (loading) {
        photoService.getNextPhoto(page).then((data) => {
          console.log(data);
          this.props.nextPage(data.photos);
        });
      }
    });
  }

  render() {
    const { photos, loading, isShowModal } = this.props;

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
                <PhotoItem photo={photo} onShowModalWindow={this.onShowModalWindow} />
              </li>
            );
          })}
          {loading && <Spinner />}
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
  };
};

// const mapDispatchToProps = {
//   photosLoaded,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    photosLoaded: (photos) => dispatch(photosLoaded(photos)),
    nextPage: (photos) => dispatch(nextPage(photos)),
    changeLoad: () => dispatch(changeLoad()),
    showModalWindow: () => dispatch(showModalWindow()),
    hideModalWindow: () => dispatch(hideModalWindow()),
    hideModalWindowBtn: () => dispatch(hideModalWindowBtn()),
  };
};

export default withPhotoService()(connect(mapStateToProps, mapDispatchToProps)(PhotoList));
