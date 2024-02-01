import { Component } from 'react';
// import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, id } = this.props;

    return (
      <div 
        className={styles.Overlay} 
        onClick={this.handleBackdropClick}
        >
        <div 
          className={styles.Modal}
          >
          <img src={imageUrl} alt="Large" width={800} height={600} id={id} />
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Modal;