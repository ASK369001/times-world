import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container className="nav-bar-container">
        <Navbar.Brand href="#home">Countries</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">All</Nav.Link>
          <Nav.Link href="#features">Asia</Nav.Link>
          <Nav.Link href="#pricing">Europe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
