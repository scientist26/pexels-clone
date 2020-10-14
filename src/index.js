import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorBoundry from './components/ErrorBoundry';
import PhotoService from './services';
import { PhotoServiceProvider } from './PhotoServiceContext';

import store from './redux/store';

const photoService = new PhotoService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <PhotoServiceProvider value={photoService}>
          <Router>
            <App />
          </Router>
        </PhotoServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
