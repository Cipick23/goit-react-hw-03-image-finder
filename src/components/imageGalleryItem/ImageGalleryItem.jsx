import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <div  className={styles.imgContainer}>
      <li className={styles.ImageGalleryItem}>
        <img src={url} alt={tags} onClick={() => onClick(url)}/>
      </li>
    </div>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};