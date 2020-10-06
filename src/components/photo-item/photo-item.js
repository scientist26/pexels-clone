import React, { Component } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';

import './photo-item.css';

class PhotoItem extends Component {
  state = {
    selected: false,
  };

  addLike = () => {
    if (this.state.selected === false) {
      this.setState({
        selected: true,
      });
    } else {
      this.setState({
        selected: false,
      });
    }
  };

  render() {
    const { photo, onNextPage } = this.props;
    const { selected } = this.state;
    const htmlColor = selected ? 'red' : 'white';
    return (
      <div className="photo-item">
        <a className="photo-item__link" href="#/">
          <img
            className="photo-item__img"
            src={photo.src.medium}
            alt="img"
            onClick={onNextPage}
          ></img>
        </a>
        <div className="photo-item__info">
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
              onClick={this.addLike}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoItem;
