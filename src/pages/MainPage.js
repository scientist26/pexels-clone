import React, { Component } from 'react';

import Header from '../components/Header';
import PhotoList from '../components/PhotoList';

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
