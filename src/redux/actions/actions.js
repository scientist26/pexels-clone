export const photosLoaded = (photos) => {
  return {
    type: 'PHOTOS_LOADED',
    payload: photos,
  };
};

export const nextPage = (photos) => {
  return {
    type: 'NEXT_PAGE',
    payload: photos,
  };
};

export const changeLoad = () => {
  return {
    type: 'CHANGE_LOAD',
  };
};

export const backgroundPhotoLoaded = (backgroundPhoto, src) => {
  return {
    type: 'BACKGROUND_PHOTO_LOADED',
    payload: backgroundPhoto,
    background: src,
  };
};

export const showModalWindow = () => {
  return {
    type: 'SHOW_MODAL_WINDOW',
  };
};

export const hideModalWindow = () => {
  return {
    type: 'HIDE_MODAL_WINDOW',
  };
};

export const hideModalWindowBtn = () => {
  return {
    type: 'HIDE_MODAL_WINDOW_BTN',
  };
};
// export const hidePhotoInfo = () => {
//   return {
//     type: 'HIDE_PHOTO_INFO',
//   };
// };
