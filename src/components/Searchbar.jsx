import { Component } from "react";

class Searchbar extends Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim() === "") return;
    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button-submit">
            Search
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
