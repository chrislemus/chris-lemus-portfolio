import React from 'react';
import { 
    Nav,
    Navbar,
 } from 'react-bootstrap';
 import logo from '../../imgs/logo.svg';


export default () => {

  return (
    <section id="navbar">
      <Navbar expand="lg"  >
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="site-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle id="nav-toggler-icon" />
        <Navbar.Collapse >
          <Nav className="ml-auto nav-menu-items">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/#skills">Skills</Nav.Link>
            <Nav.Link href="/#contact" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
}
