import { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Movies from "./components/movies/Movies";
import Header from "./components/header/Header";
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />
        <Movies />
      </div>
    );
  }
}
