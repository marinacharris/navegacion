import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navegacion extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         
          <Link className="navbar-brand" to="/">
              Principal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/pag1">
                  Página 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pag2">
                  Páagina 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navegacion;
