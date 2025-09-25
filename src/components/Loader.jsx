import  { Component } from "react";
import { RotatingLines } from "react-loader-spinner";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <RotatingLines strokeColor="red" width="50" />
      </div>
    );
  }
}

export default Loader;
