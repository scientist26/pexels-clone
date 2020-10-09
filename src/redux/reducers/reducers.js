const initialState = {
  photos: [],
  modalPhoto: {},
  backgroundPhoto: {},
  backgroundSrc: null,
  backgroundLoad: true,
  isShowModal: false,
  page: 2,
  loading: true,
  inputValue: '',
  nextPageStaticQuery: 'nature',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_LOADED':
      return {
        ...state,
        photos: action.payload,
        loading: false,
        error: null,
      };
    case 'BACKGROUND_PHOTO_LOADED':
      return {
        ...state,
        backgroundPhoto: action.payload,
        backgroundSrc: action.background,
        backgroundLoad: false,
        error: null,
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
        modalPhoto: action.payload,
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
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1,
        photos: state.photos.concat(action.payload),
        loading: false,
        error: null,
      };
    case 'INPUT_VALUE_CHANGE':
      return {
        ...state,
        inputValue: action.payload,
      };
    case 'SEARCH_PHOTO':
      return {
        ...state,
        photos: action.payload,
        error: null,
      };
    case 'STATIC_QUERY':
      return {
        ...state,
        nextPageStaticQuery: action.payload,
      };
    case 'PHOTO_ERROR':
      return {
        ...state,
        photos: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
