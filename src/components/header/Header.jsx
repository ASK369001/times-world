import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { changeRegion } from "../../reducers/countrySlice";
const Header = ({ region }) => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light">
      <Container className="nav-bar-container">
        <Navbar.Brand href="#home">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link active={region === "all"} onClick={() => dispatch(changeRegion("all"))}>
              All
            </Nav.Link>
            <Nav.Link active={region === "Asia"} onClick={() => dispatch(changeRegion("Asia"))}>Asia</Nav.Link>
            <Nav.Link active={region === "Europe"} onClick={() => dispatch(changeRegion("Europe"))}>Europe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
