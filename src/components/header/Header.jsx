import { Component } from "react";
import Search from "../search/Search";
import "./header.css";
import Button from "../btn/Button";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">UnLimited Movies And More</h1>
          <p className="header-subtitle">Watch anywhere cancel any time</p>
          <p>Ready to watch? Search for your favourite movie</p>
          <div className="search-box">
            <Search />
            <Button mediumBtn="btn-lg" btnSearch="btn-search">
              Search
            </Button>
          </div>
        </div>
      </header>
    );
  }
}
