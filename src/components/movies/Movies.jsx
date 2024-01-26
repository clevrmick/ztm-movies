import { Component } from "react";
import "./movies.css";
import Movie from "../movie/Movie";
import { movies } from "../constant/data";

export default class Movies extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main className="movie-list">
        {movies.map((item) => {
          return <Movie key={item.imdbID} item={item} />;
        })}
      </main>
    );
  }
}
