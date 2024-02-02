import { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  onSubmitImg = ev => {
    ev.preventDefault();
    this.props.handleInputChange(this.state.input);
    this.setState({ input: '' });
  };

  onChangeImg = ev => {
    this.setState({ input: ev.target.value });
  };

  render() {
    return (
      <header className={styles.Header}>
        <form className={styles.SearchForm} onSubmit={this.onSubmitImg}>
          <button type="submit" className={styles.SearchFormButton}></button>

          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={this.onChangeImg}
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            className={styles.SearchFormInput}
          />
        </form>
      </header>
    );
  }
}