export const photosLoaded = (photos) => {
  return {
    type: 'PHOTOS_LOADED',
    payload: photos,
  };
};
