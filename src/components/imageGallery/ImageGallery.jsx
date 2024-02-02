import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import Loader from 'components/loader/Loader';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import Button from 'components/button/Button';
import articles from 'services/api';

  class ImageGallery extends Component {

  state = {
    images: [],
    status: 'No network request is happening.',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.fetchImages();
    }
    if (prevProps.page !== this.props.page && this.props.page > 1) {
      this.LoadMoreImages();
    }
  }

  fetchImages = () => {
    const { inputValue, page } = this.props;
  
    this.setState({ status: 'A network request has been initiated and is in progress...' });
  
    setTimeout(() => {
      articles(inputValue, page)
        .then(response => {
          this.setState({
            images: response.hits,
            status: 'The network request has completed successfully',
          });
        })
        .catch(error => this.setState({ status: 'The network request has failed.' }));
    }, 1000);
  };
  
  LoadMoreImages = () => {
    const { inputValue, page } = this.props;
  
    this.setState({ status: 'A network request has been initiated and is in progress...' });
  
    setTimeout(() => {
      articles(inputValue, page)
        .then(response => {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
            status: 'The network request has completed successfully',
          }));
        })
        .catch(error => this.setState({ status: 'The network request has failed.' }));
    }, 1000);
  };

  render() {
    const { images, status } = this.state;

    if (status === 'A network request has been initiated and is in progress...') {
      return <Loader />;
    }

    if (status === 'The network request has completed successfully') {
      return (
        <>
          <ul className={styles.ImageGallery}>
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={this.props.onClick}
              />
            ))}
          </ul>
          {this.state.images.length !== 0 ? (
            <Button onClick={this.props.loadMore} />
          ) : (
            alert('No images to be found')
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default ImageGallery;