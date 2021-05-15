import React, { useContext } from "react"; 
import {BrowserRouter as Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import UserContext from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

  const handleLogout = (event) => {
    event.preventDefault();
    onLogout();
    return (
      <Redirect to="/" />
    );
  }

  return (
      <Navbar collapseOnSelect fixed="top" expand="true" className="navbar-custom pb-2" variant="dark" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle">
        <FontAwesomeIcon icon={faBars} className="navbar-toggle" />
      </Navbar.Toggle>
      {user.isAuthenticated
            ? <button className="login-link link-like ml-0 pl-0     pt-2 pb-2" onClick={handleLogout}>
            Logout
            </button>
            : <Nav.Link href="/login" className="login-link">
              Login
            </Nav.Link>
          }
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;