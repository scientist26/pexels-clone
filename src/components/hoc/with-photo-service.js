import React from 'react';
import { PhotoServiceConsumer } from '../photo-service-context/photo-service-context';

const withPhotoService = () => (Wrapped) => {
  return (props) => {
    return (
      <PhotoServiceConsumer>
        {(photoService) => {
          return <Wrapped {...props} photoService={photoService} />;
        }}
      </PhotoServiceConsumer>
    );
  };
};

export default withPhotoService;
