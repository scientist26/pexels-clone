import React, { Component } from 'react';

import Header from '../header/header';
import PhotoList from '../photo-list/photo-list';

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="divide-line"></div>
        <PhotoList />
      </React.Fragment>
    );
  }
}

export default MainPage;
