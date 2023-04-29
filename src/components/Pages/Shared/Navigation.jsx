import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/category/0">Home</Link>

            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Carrer</Nav.Link>
          </Nav>
          <Nav>
            <FaUser style={{ fontSize: "2rem" }}></FaUser>

            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
