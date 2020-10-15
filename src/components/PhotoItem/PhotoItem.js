import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PhotoItem.css';

class PhotoItem extends Component {
  state = {
    selectedLike: false,
    visiblePhotoInfo: false,
    isShowModal: true,
  };

  componentDidMount() {
    if (localStorage.getItem(this.props.photo.id) === null) {
      return;
    } else {
      this.setState(() => ({
        selectedLike: true,
      }));
    }
  }

  onAddLike = () => {
    if (this.state.selectedLike === false) {
      this.setState(() => ({
        selectedLike: true,
      }));
      localStorage.setItem(`${this.props.photo.id}`, `${this.props.photo.id}`);
    } else {
      this.setState(() => ({
        selectedLike: false,
      }));
      localStorage.removeItem(`${this.props.photo.id}`, `${this.props.photo.id}`);
    }
  };

  onShowPhotoInfo = () => {
    this.setState({
      visiblePhotoInfo: true,
    });
  };

  onHidePhotoInfo = () => {
    this.setState({
      visiblePhotoInfo: false,
    });
  };

  render() {
    const { photo, onShowModalWindow } = this.props;
    const { selectedLike, visiblePhotoInfo } = this.state;
    const htmlColor = selectedLike ? 'red' : 'white';
    const photoInfo = visiblePhotoInfo ? 'photo-item__info' : 'photo-item__info hidden';

    return (
      <div
        className="photo-item"
        onMouseOver={this.onShowPhotoInfo}
        onMouseOut={this.onHidePhotoInfo}
      >
        <a className="photo-item__link" href="#/">
          <img
            className="photo-item__img"
            src={photo.src.medium}
            alt="img"
            onClick={onShowModalWindow}
          ></img>
        </a>
        <div className={photoInfo}>
          <a
            className="photo-item__author"
            rel="noopener noreferrer"
            target="_blank"
            href={photo.photographer_url}
          >
            <span className="photo-item__author-name">{photo.photographer}</span>
          </a>
          <button className="photo-item__author-like">
            <FavoriteIcon
              htmlColor={htmlColor}
              className="photo-item__author-like-svg"
              onClick={this.onAddLike}
            />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showInfo: state.showInfo,
  };
};

export default connect(mapStateToProps)(PhotoItem);
