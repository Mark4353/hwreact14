import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <div className="overlay" onClick={this.handleOverlayClick}>
        <div className="modal">
          <button className="button-close" onClick={this.props.onClose}>
            x
          </button>
          <img className="modal-image" src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
