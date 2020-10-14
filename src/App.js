import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import SearchPage from './pages/SearchPage';
import MainPage from './pages';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/search/:request" component={SearchPage} exact />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  );
};

export default App;
