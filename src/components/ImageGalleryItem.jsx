import { Component } from "react";

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.large);
  };

  render() {
    const { small } = this.props;
    return (
      <li className="gallery-item" onClick={this.handleClick}>
        <img src={small} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
