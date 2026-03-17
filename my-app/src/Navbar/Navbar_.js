import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const Navbar_ =() =>(
<Navbar className="bg-body-tertiary" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/portfolio" >Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/AboutMe">About Me</Nav.Link>
        <Nav.Link as={Link} to="/Project">Works</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );

export default Navbar_;

            
{/* <div className='AboutMe'>
<Link to="/AboutMe">AboutMe</Link>
</div>
<div className='cart'>
<Link to="/cart">Cart</Link>
</div> */}
{/* <Link to="/">Home</Link> */}