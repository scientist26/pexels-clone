import { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('root-modal');

class Portal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
