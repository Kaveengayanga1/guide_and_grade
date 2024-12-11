import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = (props) => {
  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="w-100">
      <BootstrapNavbar.Brand href="#home" className="ms-3">
        Guide and Grade
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" onClick={() => props.getPageForRouting('home')}>Home</Nav.Link>
          <Nav.Link href="#summary" onClick={() => props.getPageForRouting('summary')}>Summary</Nav.Link>
          <Nav.Link href="#analyze" onClick={() => props.getPageForRouting('analyze')}>Analye</Nav.Link>
          <Nav.Link href="#about" onClick={() => props.getPageForRouting('about')}>About</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
