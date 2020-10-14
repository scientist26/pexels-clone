import React from 'react';
import { PhotoServiceConsumer } from '../PhotoServiceContext';

const withPhotoService = (Wrapped) => {
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
