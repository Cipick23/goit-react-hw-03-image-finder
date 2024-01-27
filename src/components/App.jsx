import 'index.css'
import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Loader from './loader/Loader';
import Button from './button/Button';
import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = '40925294-1286bb755e1bdf5717fd8e824';

class App extends Component {
  state = {
    articles: []
  }

  async retrieveArticles(query = 'react') {
    try {
      const response = await axios.get(`/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({ articles: response.data.hits });
    } catch (error) {
      console.error('Error retrieving articles:', error);
    }
  }
  

async componentDidMount() {
  this.retrieveArticles();
}

  render() {
    const { articles } = this.state;

  return (
    <div>
      <Searchbar onSubmit={this.retrieveArticles} />

      <ImageGallery articles={articles} />

      <ImageGalleryItem/>

      <Loader/>

      <Button/>

    </div>
  );
  }
};

export default App;