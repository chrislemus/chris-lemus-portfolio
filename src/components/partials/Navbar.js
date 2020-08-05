import React from 'react';
import { 
    Nav,
    Navbar,
 } from 'react-bootstrap';
 import logo from '../../imgs/logo.png';


export default () => {
    return (
      <div className="navbar--bg">
        <Navbar expand="lg" className="content">
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="site-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="/#skills">Skills</Nav.Link>
              <Nav.Link href="#contact--container" id="contact--nav--link">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
 }
