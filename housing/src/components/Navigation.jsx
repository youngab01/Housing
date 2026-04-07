import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">KHABAM ENTERPRISE LTD!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <NavDropdown 
              title={<span>State of services <i className="fa fa-chevron-down ms-1" style={{fontSize: '0.7rem'}}></i></span>} 
              id="basic-nav-dropdown"
              // ❌ Removed: className="dropdown-menu-custom"
            >
              <NavDropdown.Item as={Link} to="/abuja">Abuja State</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kano">Kano State</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kaduna">Kaduna State</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;