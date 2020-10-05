const initialState = {
  photos: [],
  backgroundPhoto: {},
  backgroundSrc: null,
  backgroundLoad: true,
  page: 1,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_LOADED':
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case 'BACKGROUND_PHOTO_LOADED':
      return {
        ...state,
        backgroundPhoto: action.payload,
        backgroundSrc: action.background,
        backgroundLoad: false,
      };
    case 'CHANGE_LOAD':
      return {
        ...state,
        loading: true,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1,
        photos: state.photos.concat(action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
