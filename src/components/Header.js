import React, { useContext } from "react"; 
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import UserContext from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

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
          {!user.isAuthenticated && 
            <Nav.Link href="/login" className="navlink-custom">
            Login
            </Nav.Link>
          }
          {user.isAuthenticated &&
            <button className="navLink-custom link-like ml-0 pl-0 pt-2" onClick={(event) => {
            event.preventDefault();
            onLogout();
            }}>Logout</button>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;