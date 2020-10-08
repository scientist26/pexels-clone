import React, { Component } from 'react';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import './modal.css';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Downloader from 'js-file-downloader';

class Modal extends Component {
  download = (url) => {
    new Downloader({
      url: url,
    });
  };

  render() {
    const { onHideModalWindow, onHideModalWindowBtn, modalPhoto } = this.props;
    return (
      <div className="modal-wrapper" onClick={onHideModalWindow}>
        <button className="modal-close" onClick={onHideModalWindowBtn}>
          <CloseIcon style={{ fontSize: 30 }} htmlColor={'white'} />
        </button>
        <div className="modal-container">
          <div className="modal__img">
            <img src={modalPhoto.src.medium} alt="img"></img>
          </div>
          <div className="modal__info">
            <Dropdown as={ButtonGroup} className="modal__info-btn-group">
              <Button variant="success" onClick={() => this.download(modalPhoto.src.medium)}>
                Download
              </Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">original</Dropdown.Item>
                <Dropdown.Item href="#/action-2">large2x</Dropdown.Item>
                <Dropdown.Item href="#/action-3">large</Dropdown.Item>
                <Dropdown.Item href="#/action-3">medium</Dropdown.Item>
                <Dropdown.Item href="#/action-3">small</Dropdown.Item>
                <Dropdown.Item href="#/action-3">landscape</Dropdown.Item>
                <Dropdown.Item href="#/action-3">tiny</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalPhoto: state.modalPhoto,
  };
};

export default connect(mapStateToProps)(Modal);
