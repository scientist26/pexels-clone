const initialState = {
  photos: [],
  backgroundPhoto: {},
  backgroundSrc: null,
  backgroundLoad: true,
  isShowModal: false,
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
    case 'SHOW_MODAL_WINDOW':
      return {
        ...state,
        isShowModal: true,
      };
    case 'HIDE_MODAL_WINDOW':
      return {
        ...state,
        isShowModal: false,
      };
    case 'HIDE_MODAL_WINDOW_BTN':
      return {
        ...state,
        isShowModal: false,
      };
    // case 'HIDE_PHOTO_INFO':
    //   return {
    //     ...state,
    //     showInfo: false,
    //   };
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
