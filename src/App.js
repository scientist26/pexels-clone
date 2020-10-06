import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Modal from './components/pages/modal';
import MainPage from './components/pages/main-page';

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
