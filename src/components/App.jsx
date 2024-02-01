import 'index.css';
import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
// import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Button from './button/Button';
import axios from 'axios';
import Loader from './loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '40925294-1286bb755e1bdf5717fd8e824';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: false,
      page: 1,
      showButton: false,
      query: '',
    };

    this.retrieveArticles = this.retrieveArticles.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async retrieveArticles(query = 'react', page = 1) {
    console.log(`Retrieving articles for page ${page}`); 
    this.setState({ isLoading: true, query });
  
    try {
      const response = await axios.get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log('A fost returnată corect următoarea pagină de rezultate');
  
      const newArticles =
        page === 1
          ? response.data.hits
          : [...this.state.articles, ...response.data.hits];
  
      // Verifică dacă numărul de imagini returnate de API este mai mic decât numărul pe care îl aștepți
      const showButton = newArticles.length === 12;
  
      this.setState(prevState => ({
        articles: newArticles,
        page,
        showButton,
        query: prevState.query,
      }));
    } catch (error) {
      console.error('Error retrieving articles:', error);
    } finally {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
    }
  }  

  loadMore = () => {
    console.log('Butonul Load more a fost apăsat'); // Adaugă acest rând
    this.setState(prevState => ({ page: prevState.page + 1 }), () => {
    this.retrieveArticles(this.state.query, this.state.page);
    });
  };
  

  handleButtonClick = () => {
    this.loadMore();
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if ((prevState.query !== query || prevState.page !== page) && query) {
      this.retrieveArticles(query, page);
    }
  }

  render() {
    const { isLoading, articles, showButton } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.retrieveArticles} />
        {isLoading ? (
          <Loader type="ThreeDots" color="#4fa94d" height={80} width={80} />
        ) : articles.length > 0 ? (
          <>
            <ImageGallery articles={this.state.articles} />
            {showButton && (
              <Button onClick={this.handleButtonClick} type="submit" />
            )}
          </>
        ) : (
          <p>No articles to display</p>
        )}
      </div>
    );
  }
}

export default App;
