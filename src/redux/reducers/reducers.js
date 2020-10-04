const initialState = {
  photos: [],
  page: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_LOADED':
      return {
        ...state,
        photos: action.payload,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1,
        photos: state.photos.concat(action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
