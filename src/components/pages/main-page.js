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
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
        <div className="divide-line"></div>
      </React.Fragment>
    );
  }
}

export default MainPage;
