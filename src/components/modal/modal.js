import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './modal.css';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Modal extends Component {
  render() {
    const { onHideModalWindow, onHideModalWindowBtn } = this.props;
    return (
      <div className="modal-wrapper" onClick={onHideModalWindow}>
        <button className="modal-close" onClick={onHideModalWindowBtn}>
          <CloseIcon style={{ fontSize: 30 }} htmlColor={'white'} />
        </button>
        <div className="modal-container">
          <div className="modal__img">
            <img
              src="https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="img"
            ></img>
          </div>
          <div className="modal__info">
            <Dropdown as={ButtonGroup} className="modal__info-btn-group">
              <Button variant="success">Download</Button>

              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
