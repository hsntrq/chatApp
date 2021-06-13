import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
          id="mainNav"
          style={{ background: "rgb(44, 62, 80)" }}
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              Online Chat App
            </a>
            <button
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1"></li>
                <li className="nav-item mx-0 mx-lg-1"></li>
                <li className="nav-item mx-0 mx-lg-1"></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
