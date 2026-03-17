import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../App.css";

function AboutMe() {


  return(
  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="min-vh-100 d-flex align-items-center bg-light py-5">
    <Container className='bg-white p-5 rounded shadow-sm'>
      <Row className="mb-4">
        <Col>
          <h1 className='display-4 fw-bold'>About Me</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h3 className='text-secondary'>This is Victor, graduated from The Chinese University of Hong Kong</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='lead fs-4'>Hello! I’m a newcomer to the world of data science, driven by a strong curiosity about how data can shape our understanding of the world.</p> 
          <p className='lead fs-4'>Although I’m just starting my journey, I am eager to learn and explore the vast possibilities this field has to offer.</p>
        </Col>
      </Row>
    </Container>
  </motion.div>
  )
};

export default AboutMe;