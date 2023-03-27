import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#002E7D" }}
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Clerspecs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/spectales'>
                <i className='fas fa-glasses'></i>Spectales
              </Nav.Link>
              <Nav.Link as={Link} to='/goggles'>
                <i className='fas fa-face-smile'></i>Goggles
              </Nav.Link>

              <Nav.Link as={Link} to='/cart'>
                <i className='fa-solid fa-cart-shopping'></i>Cart
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                <i className='fas fa-user'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
