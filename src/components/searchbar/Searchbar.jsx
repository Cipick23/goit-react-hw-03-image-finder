import React, { Component } from "react";
import styles from './Searchbar.module.css'
import PropTypes from 'prop-types';

class Searchbar extends Component {
  

  state = {
    query: '', // Starea locală a componentei pentru cuvântul cheie de căutare
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (e) => {
    // debugger;
    e.preventDefault();

    const { onSubmit } = this.props;
    const { query } = this.state;

    if (onSubmit && query.trim() !== '') {
      onSubmit(query);
    }

    // this.setState({ query: '' });
  };
  

  render() {
    const { query } = this.state;

    return (
    <header className={styles.Header}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
                <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
                className={styles.SearchFormInput}
                type="text"
                value={query}
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
