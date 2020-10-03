import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Modal from './components/pages/modal';
import MainPage from './components/pages/main-page';

import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001b83ad5ac776846c09cd562218e336b72');
const query = 'random';

client.photos.search({ query, per_page: 5 }).then((photos) => {
  console.log(photos);
});

// const initialState = {
//   page: 1,
// };

// import { createStore, bindActionCreators } from 'redux';

// import reducer from './redux/reducer';
// // import { nextPage, nextRnd } from './redux/actions';
// import * as actions from './redux/actions';

// const RND = Math.floor(Math.random() * 10);

// const nextPage = () => {
//   return {
//     type: 'NEXT_PAGE',
//   };
// };

// const nextRnd = (RND) => {
//   return {
//     type: 'NEXT_RND',
//     RND,
//   };
// };

// const reducer = (state = { page: 1 }, action) => {
//   switch (action.type) {
//     case 'NEXT_PAGE':
//       return (state = { page: state.page + 1 });
//     case 'NEXT_RND':
//       return (state = { page: state.page + action.RND });
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// const nextDispatch = () => dispatch(nextPage());
// const rndDispatch = (RND) => dispatch(nextRnd(RND));

// const nextDispatch = bindActionCreators(nextPage, dispatch);
// const rndDispatch = bindActionCreators(nextRnd, dispatch);

// const { nextDispatch, rndDispatch } = bindActionCreators(
//   { nextDispatch: nextPage, rndDispatch: nextRnd },
//   dispatch
// );

// const ololo = bindActionCreators({ nextDispatch: nextPage, rndDispatch: nextRnd }, dispatch);

// const { nextPage, nextRnd } = bindActionCreators(actions, dispatch);

// store.subscribe(() => {
//   console.log(store.getState());
// });
// ololo.nextDispatch();
// ololo.rndDispatch(RND);
// // ololo.nextDispatch();
// nextPage();
// nextRnd(RND);
// // dispatch(nextPage());
// nextPage();

// console.log(store.getState());

// let state = reducer(undefined, {});
// console.log(state);
// state = reducer(state, { type: 'NEXT_PAGE' });
// console.log(state);

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/photo" component={Modal} exact />
      </Switch>
    </div>
  );
};

export default App;
