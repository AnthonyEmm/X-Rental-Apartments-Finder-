import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const hideNavbar = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-inherit" ref={navbarRef}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span>X Rental</span>
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavbarOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item align-self-end">
              <Link className="nav-link" to="/" onClick={hideNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item align-self-end">
              <Link className="nav-link" to="#" onClick={hideNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item align-self-end">
              <Link className="nav-link" to="/login" onClick={hideNavbar}>
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
