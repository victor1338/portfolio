import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {


  return(
  <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
    <Container>
      <Row>
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <strong>Victor Lee</strong>
        </Col>
      </Row>

    </Container>


  </motion.div>
  )
};

export default AboutMe;