import { Component } from "react";
import { navigationLink } from "../constant/data";
import "./navbar.css";
import Button from "../btn/Button";

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
            {/* <Button btnType="btn-small" size="small">
              Login
            </Button> */}

            {navigationLink.map((link) => {
              return (
                <li key={link.text} className="nav-items">
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button smallBtn="btn-small">Login</Button>
            <Button mediumBtn="btn-lg">Sign up</Button>
          </div>
        </div>
      </nav>
    );
  }
}
