import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

function NavBar() {
  return (
    <>
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
    </>
  );
}

export default NavBar;
