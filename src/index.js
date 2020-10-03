import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorBoundry from './components/error-boundry/error-boundry';
import PhotoService from './services/photo-services';
import { PhotoServiceProvider } from './components/photo-service-context/photo-service-context';

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
