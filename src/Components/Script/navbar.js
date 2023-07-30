import React from 'react';
import {NavDropdown,NavItem,Container,NavLink,ListGroup,ListGroupItem,Navbar,Nav, NavbarBrand} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const Topbar= () =>{
  return (
  <div>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <NavbarBrand href='/'>Navneet Shankar's Personal Site</NavbarBrand>
      <NavbarToggle aria-controls='basic-navbar-nav' />
      <NavbarCollapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <NavLink href='/projects'>Projects</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
          <NavLink href='https://www.linkedin.com/in/navneets889593176/'>Linkedin</NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
    </Navbar>
  </div>
  );
}
export default Topbar;