import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand href="#home">Guide and Grade</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#report">Report</Nav.Link>
          <Nav.Link href="#analyze">Analyze</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
