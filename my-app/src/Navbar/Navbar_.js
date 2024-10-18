import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const Navbar_ =() =>(
<Navbar className="bg-body-tertiary"  expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/AboutMe" className='Nav-link'>About Me</Link>
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