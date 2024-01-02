import React from "react";
import "./NavBar.css";

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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item align-self-end">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item align-self-end">
              <a className="nav-link" href="#">
                Sign-in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
