import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    this.instance = basicLightbox.create(`
      <div className="${styles.Modal}">
          <img 
              src='${this.props.url}'
              width="900"
              height="800"
              alt="Large Image"
          >
      </div>
    `);

    this.instance.show();

    window.addEventListener('keydown', this.handleKeyPress);
    this.instance.element().addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    this.instance.element().removeEventListener('click', this.handleClickOutside);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.instance.close();
      this.props.onClose();
    }
  };

  handleClickOutside = e => {
    if (e.target === e.currentTarget) {
      this.instance.close();
      this.props.onClose();
    }
  };

  render() {
    return null;
  }
}

export default Modal;