import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  

  render() {
    const { articles } = this.props;

  return (
    <ul className={styles.ImageGallery}>
      {articles.map(({ id, largeImageURL }, index) => (
        <ImageGalleryItem
          key={id}
          id={id}
          largeImageURL={largeImageURL}
        />
      ))}
  </ul>

  );
};
};

ImageGallery.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ImageGallery;