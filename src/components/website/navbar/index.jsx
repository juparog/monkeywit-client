import React, { PureComponent } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Image1 from '*static/img/monkeywit/logo-512.png';
import Image2 from '*static/img/monkeywit/monkeywit-512.png';

import './style.css';

class NavbarMain extends PureComponent {
  render() {
    return (
      <Navbar bg="light" expand="md" className="py-0 navbar-dark fixed-top">
        <Navbar.Brand href="/inicio">
          <img
            alt=""
            src={Image1}
            height="40"
            className="d-inline-block align-center mr-1"
          />
          <img
            alt=""
            src={Image2}
            height="20"
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="#link1">Cursos</Nav.Link>
            <Nav.Link href="#link2">Blog</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Quienes somos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
