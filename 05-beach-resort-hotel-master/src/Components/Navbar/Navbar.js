import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand d-sm-block mr-4" to="/">
          <img src={Logo} alt="Beach Resort"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarexpandbutton"
          aria-controls="navbarexpandbutton"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mr-auto"
          id="navbarexpandbutton"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
