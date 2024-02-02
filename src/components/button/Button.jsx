import { Component } from "react";
import styles from './Button.module.css'
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const { onClick } = this.props;

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
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;