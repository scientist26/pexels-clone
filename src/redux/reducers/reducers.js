const initialState = {
  photos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_LOADED':
      return {
        photos: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
