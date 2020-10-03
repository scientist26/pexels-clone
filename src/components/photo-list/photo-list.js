import React, { Component } from 'react';
import { connect } from 'react-redux';
import './photo-list.css';

import { photosLoaded } from '../../redux/actions/actions';

import withPhotoService from '../hoc/with-photo-service';
import PhotoItem from '../photo-item/photo-item';

class PhotoList extends Component {
  componentDidMount() {
    const { photoService } = this.props;
    photoService.getPhoto().then((data) => {
      console.log(data);
      this.props.photosLoaded(data.photos);
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
                <PhotoItem photo={photo} />
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
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ photosLoaded }, dispatch);
// };

const mapDispatchToProps = {
  photosLoaded,
};
export default withPhotoService()(connect(mapStateToProps, mapDispatchToProps)(PhotoList));
