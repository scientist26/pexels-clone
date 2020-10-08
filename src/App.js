import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import SearchPage from './components/pages/search-page/search-page';
import MainPage from './components/pages/main-page';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  );
};

export default App;
