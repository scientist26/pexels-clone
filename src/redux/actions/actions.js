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

export const showModalWindow = (photo) => {
  return {
    type: 'SHOW_MODAL_WINDOW',
    payload: photo,
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

export const inputValueChange = (value) => {
  return {
    type: 'INPUT_VALUE_CHANGE',
    payload: value,
  };
};

export const searchPhoto = (photos) => {
  return {
    type: 'SEARCH_PHOTO',
    payload: photos,
  };
};

export const staticQuery = (query) => {
  return {
    type: 'STATIC_QUERY',
    payload: query,
  };
};

export const photosError = (error) => {
  return {
    type: 'PHOTO_ERROR',
    payload: error,
  };
};
