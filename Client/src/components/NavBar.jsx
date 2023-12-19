import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-inherit container-fluid px-4">
      <Link to="/" className="navbar-brand fw-bold fs-4">
        <span>X Rental</span>
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

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link to="/login" className="btn">
              Sign-in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  /* <>
      <Navbar className="nav navbar-dark text-success border-bottom border-success sticky-top">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            X RENTAL
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <div className="links d-flex gap-3">
            <Button variant="outline-success">Post Property</Button>
            <Button variant="outline-success">Sign In</Button>
          </div>
        </Container>
      </Navbar>
    </> */
}

export default NavBar;
