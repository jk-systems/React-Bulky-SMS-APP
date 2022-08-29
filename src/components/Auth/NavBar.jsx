import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Wahudumu SMS Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About Engine</Nav.Link>
                <Nav.Link href="/broadcast">Broadcast Message</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/contacts">Add Contacts</Nav.Link>
                <Nav.Link href="/account"> Account </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavBar