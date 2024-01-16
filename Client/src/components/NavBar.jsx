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
    <nav className="navbar sticky-top navbar-expand-lg bg-inherit p-3">
      <div className="container-fluid px-4">
        <Link
          to="/"
          className="navbar-brand d-flex justify-content-center align-items-center gap-2 fw-bold fs-4 "
        >
          <img src="/logo.svg" alt="" />
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
              <Link
                to="/"
                className="nav-link nav-item"
                aria-current="page"
                onClick={handleCloseOffcanvas}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="nav-link nav-item"
                onClick={handleCloseOffcanvas}
              >
                About
              </Link>

              {!loading && (
                <>
                  {!user ? (
                    <Link
                      to="/login"
                      className="nav-link nav-item"
                      onClick={handleCloseOffcanvas}
                    >
                      Sign In
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/list"
                        className="nav-link nav-item"
                        onClick={handleCloseOffcanvas}
                      >
                        Listings
                      </Link>
                      <li className=" dropdown">
                        <Link
                          className="nav-link dropdown-toggle nav-item"
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
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdown "
                          style={{
                            backgroundColor: "rgb(33, 31, 31)",
                            width: "12rem",
                            color: "rgb(17, 189, 74)",
                          }}
                        >
                          <li>
                            <Link
                              to="/profile"
                              className="dropdown-item nav-item"
                              onClick={handleCloseOffcanvas}
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/update"
                              className="dropdown-item nav-item"
                              onClick={handleCloseOffcanvas}
                            >
                              Update Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/login"
                              className="dropdown-item nav-item"
                              onClick={logout}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
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
