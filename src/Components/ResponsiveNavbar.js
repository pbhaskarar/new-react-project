import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Contact from './Contact';
import InputWithIcon from './InputWithIcon';
import Login from './Login';
import Register from './Register';

const ResponsiveNavbar = () => {
    return (
        <Router>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                <Nav.Link as={Link} to={"/inputwithicon"}>InputWithIcon</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    <div>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inputwithicon" element={<InputWithIcon />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
        </Router>
      )
    }

export default ResponsiveNavbar