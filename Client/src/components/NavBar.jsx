import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-inherit">
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold fs-4" href="#">
          <span>X Rental</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item align-self-end">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item align-self-end">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item align-self-end">
              <Link className="nav-link" to="/login">
                Sign-in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
