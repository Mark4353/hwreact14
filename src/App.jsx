import "./App.css";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

const API_KEY = "49809824-6020f8c5e3e6ee0bf43d51bd8"; 

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    loading: false,
    selectedImage: null,
    totalHits: 0, // добавлено
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    if (!query) return;

    this.setState({ loading: true });

    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      this.setState((prev) => ({
        images: page === 1 ? data.hits : [...prev.images, ...data.hits],
        totalHits: data.totalHits, 
      }));
    } catch (error) {
      console.error("Error fetching images", error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (newQuery) => {
    if (newQuery !== this.state.query) {
      this.setState({
        query: newQuery,
        page: 1,
        images: [],
        totalHits: 0, 
      });
    }
  };

  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (imageURL) => {
    this.setState({ selectedImage: imageURL });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, loading, selectedImage, totalHits } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && images.length < totalHits && (
          <Button onClick={this.loadMore} />
        )}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
