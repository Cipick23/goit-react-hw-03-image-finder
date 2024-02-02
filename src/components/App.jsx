import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Modal from "./modal/Modal";

class App extends Component {

  state = {
    inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
  }

  handleInputChange = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 })
  }  

  handleModalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }  

  showModalImg = url => {
    this.handleModalToggle();
    this.setState({ modalImg: url });
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };


  render() {
    const { modalImg, showModal ,page} = this.state;

    return (
      <>
        <Searchbar handleInputChange={this.handleInputChange}/>
        <ImageGallery inputValue={this.state.inputValue} onClick={this.showModalImg} loadMore={this.loadMore} page={page}/>
        {showModal && <Modal url={modalImg} onClose={this.handleModalToggle} />}
      </>
    )
  }
}

export default App;
