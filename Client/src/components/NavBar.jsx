import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleToggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-inherit">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span>X Rental</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleOffcanvas}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        <div
          className={`offcanvas offcanvas-end ${isOffcanvasOpen ? "show" : ""}`}
          tabIndex="-1"
          id="navbarNav"
          aria-labelledby="navbarNavLabel"
        >
          <div className="offcanvas-header justify-content-center">
            {/* <h5 className="offcanvas-title fw-bold" id="offnavbarNavLabel">
              Menu
            </h5> */}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              style={{
                backgroundColor: "lightgreen",
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "50px",
              }}
              onClick={handleCloseOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body align-self-end">
            <ul className="navbar-nav gap-3" role="menu">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={handleCloseOffcanvas}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={handleCloseOffcanvas}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={handleCloseOffcanvas}
                >
                  Sign-in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
