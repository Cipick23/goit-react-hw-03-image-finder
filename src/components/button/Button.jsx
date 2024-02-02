import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <div className={styles.ButtonContainer}>
        <button 
          onClick={onClick}
          type="submit"
          className={styles.Button}
          >
          Load more
        </button>
      </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};