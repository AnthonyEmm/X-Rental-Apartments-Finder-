import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-inherit container-fluid px-4">
      <a class="navbar-brand fw-bold fs-4" href="#">
        <span>X Rental</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="btn" href="#">
              Sign-in
            </a>
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
