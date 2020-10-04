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
