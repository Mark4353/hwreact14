import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className="gallery-list">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            small={webformatURL}
            large={largeImageURL}
            onClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
