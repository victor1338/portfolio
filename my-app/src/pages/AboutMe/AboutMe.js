import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../App.css";

function AboutMe() {


  return(
  <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
    <Container id='aboutme' className='d-grid gap-3'>
      <Row>
        <Col>
          <h1 id='header'>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2><strong>This is Victor, graduated from the The Chinese University of Hong Kong</strong></h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p id='aboutmetext'>Hello! I’m a newcomer to the world of data science, driven by a strong curiosity about how data can shape our understanding of the world.
          </p> 
          <p id='aboutmetext'>Although I’m just starting my journey, I am eager to learn and explore the vast possibilities this field has to offer.</p>
        </Col>
      </Row>

    </Container>


  </motion.div>
  )
};

export default AboutMe;