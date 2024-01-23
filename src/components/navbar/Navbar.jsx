import { Component } from "react";
import "./navbar.css";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">ZTMovies</div>
          <ul className="nav-list">
            <li className="nav-items">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-items">
              <a href="" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-items">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-items">
              <a href="" className="nav-link">
                Gallary
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
