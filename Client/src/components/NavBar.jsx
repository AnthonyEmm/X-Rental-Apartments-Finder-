import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Avatar from "../assets/user-circle-fill.svg";

function NavBar() {
  const { logout, loading, user } = useContext(AuthContext);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleToggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-inherit p-3">
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
          className={`offcanvas bg-dark offcanvas-end ${
            isOffcanvasOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="navbarNav"
          aria-labelledby="navbarNavLabel"
        >
          <div className="offcanvas-header justify-content-end ">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={handleCloseOffcanvas}
              style={{
                backgroundColor: "green",
                color: "green",
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "50px",
              }}
            ></button>
          </div>
          <div className="offcanvas-body justify-content-end w-100">
            <ul className="navbar-nav gap-4" role="menu">
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

              {!loading && (
                <>
                  {!user ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/login"
                        onClick={handleCloseOffcanvas}
                      >
                        Sign-in
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/profile"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={user.avatar || Avatar}
                          alt="profile"
                          className="nav-item rounded-circle object-cover"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-end bg-dark"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            className="dropdown-item text-successt"
                            to="/sign-up"
                            onClick={handleCloseOffcanvas}
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-successt"
                            to="/profile"
                            onClick={handleCloseOffcanvas}
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-successt"
                            to="/update"
                            onClick={handleCloseOffcanvas}
                          >
                            Update Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-successt"
                            to="/login"
                            onClick={logout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
