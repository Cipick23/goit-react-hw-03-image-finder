import React, { Component } from "react";
import styles from './Searchbar.module.css'

class Searchbar extends Component {
  state = {
    searchQuery: "", // Starea locală a componentei pentru cuvântul cheie de căutare
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { searchQuery } = this.state;

    // Trimite cuvântul cheie către componenta părinte
    onSubmit(searchQuery);

    // Poți reseta și starea locală dacă este necesar
    // this.setState({ searchQuery: "" });
  };

  render() {
    return (
    <header className={styles.searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
                <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
                className={styles.SearchFormInput}
                type="text"
                value={this.state.searchQuery}
                onChange={this.handleInputChange}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>
    );
  }
}

export default Searchbar;
