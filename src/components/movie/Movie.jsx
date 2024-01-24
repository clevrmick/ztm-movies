import { Component } from "react";
import "./movie.css";

export default class Movie extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log(this.props.item);
    return (
      <div className="movie">
        {/* <img src="" alt="" className="movie-image" /> */}
        <div className="movie-image">
          <img src={this.props.item.Poster} alt="" />
        </div>
        <h3 className="movie-title">{this.props.item.Title}</h3>
        <h4 className="movie-year">{this.props.item.Year}</h4>
      </div>
    );
  }
}
