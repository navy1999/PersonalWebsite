import React from 'react';
import {NavDropdown,NavItem,Container,NavLink,ListGroup,ListGroupItem,Navbar,Nav, NavbarBrand} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import Scroll from 'react-scroll';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const ScrollLink = Scroll.ScrollLink
const Topbar= () =>{
  return (
  <div>
    <Navbar id="navbar-main" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <NavbarBrand href='/PersonalWebsite'>Navneet Shankar's Personal Site</NavbarBrand>
      <NavbarToggle aria-controls='basic-navbar-nav' />
      <NavbarCollapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <NavLink href="/PersonalWebsite/#/projects">Projects</NavLink>
          <NavLink href='/PersonalWebsite/#/contact'>Contact</NavLink>
          <NavLink href='https://www.linkedin.com/in/navneets889593176/'>Linkedin</NavLink>
        </Nav>
      </NavbarCollapse>
    </Container>
    </Navbar>
  </div>
  );
}
export default Topbar;