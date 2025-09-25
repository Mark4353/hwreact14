import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="button-load-more" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
