import { Component } from "react";
import "./search.css";
export default class Search extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <input
        type="search"
        className="search-input"
        placeholder="Search movies"
      />
    );
  }
}
