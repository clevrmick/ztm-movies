import { Component } from "react";
import "./btn.css";
export default class Button extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    // const {size, color} = this.props
    return (
      <button className={`btn ${this.props.btnType}`}>
        {this.props.children}
      </button>
    );
  }
}
