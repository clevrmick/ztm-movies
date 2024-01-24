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
      <main className="movies-list" style={{ display: "flex" }}>
        {movies.map((item) => {
          return <Movie key={item.imdbID} item={item} />;
        })}
      </main>
    );
  }
}
