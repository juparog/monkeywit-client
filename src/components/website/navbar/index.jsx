import React, { PureComponent } from 'react';
import {
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Image1 from 'static-files/img/monkeywit/logo-completo-512.png';

import './style.css';

class NavbarMain extends PureComponent {
  render() {
    return (
      <Navbar bg="white" expand="md" className="py-0 navbar-dark fixed-top border-bottom shadow-black">
        <Navbar.Brand href="/inicio">
          <img
            alt=""
            src={Image1}
            height="40"
            className="d-inline-block align-center mr-1"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/inicio" className="nav-link">Inicio</Link>
            <Link to="/cursos" className="nav-link">Cursos</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
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
