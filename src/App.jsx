import { Component } from "react";
import Navbar from "./components/navbar/Navbar";
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}
