import React from "react"; 
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="true" className="navbar-custom" variant="dark" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle">
          <FontAwesomeIcon icon={faBars} className="navbar-toggle" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/" className="navlink-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/highlights" className="navlink-custom">
              Highlights
            </Nav.Link>
            <Nav.Link href="/contact" className="navlink-custom">
              Contact
            </Nav.Link>
            {/* <Nav.Link href="/login" className="navlink-custom">
              Login
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
};

export default Header;