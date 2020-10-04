import React from 'react';
import './photo-item.css';

const PhotoItem = ({ photo, onNextPage }) => {
  const { src, photographer, photographer_url } = photo;
  return (
    <div className="photo-item">
      <a className="photo-item__link" href="#/">
        <img className="photo-item__img" src={src.medium} alt="img" onClick={onNextPage}></img>
      </a>
      <div className="photo-item__info">
        <a
          className="photo-item__author"
          rel="noopener noreferrer"
          target="_blank"
          href={photographer_url}
        >
          <span className="photo-item__author-name">{photographer}</span>
        </a>
        <button className="photo-item__author-like"></button>
      </div>
    </div>
  );
};

export default PhotoItem;
