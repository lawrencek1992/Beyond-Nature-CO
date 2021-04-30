import React from "react"; 
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect fixed="top" bg="dark" expand="true" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#highlights">Highlights</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
};

export default Header;