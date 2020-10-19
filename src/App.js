import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { staticQuery } from './redux/actions/actions';
import './App.css';

import SearchPage from './pages/SearchPage';
import MainPage from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route
            path="/search/:request"
            render={({ match }) => {
              const { request } = match.params;
              this.props.staticQuery(request);
              return <SearchPage />;
            }}
            exact
          />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    staticQuery: (request) => dispatch(staticQuery(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
