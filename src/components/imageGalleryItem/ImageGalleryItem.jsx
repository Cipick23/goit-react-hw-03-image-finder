import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
// import Modal from 'components/modal/Modal';
import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

class ImageGalleryItem extends Component {
  modalInstance = null;

  handleImageClick = () => {
    this.modalInstance = basicLightbox.create(`
      <img src="${this.props.largeImageURL}" width="800" height="600">
    `);

    this.modalInstance.show();
  };

  handleKeyDown = (event) => {
    if (event.code === 'Escape' && this.modalInstance) {
      this.modalInstance.close();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { largeImageURL, id } = this.props;

    return (
      <div className={styles.imgContainer}>
          <li className={styles.ImageGalleryItem} onClick={this.handleImageClick}>
            <img src={largeImageURL} alt="" id={id}/>
          </li>
      </div>
      
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func,
}

export default ImageGalleryItem;