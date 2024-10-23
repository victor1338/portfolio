import React from 'react';
import {motion} from "framer-motion";
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => (
    <motion.div   initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
        <Container id='home'>
        <Row>
        <Col id='center'>
        Hi there <br/>
        I am Victor Lee<br/>
        This is the page of my past projects
        </Col>
        <Col >Insert Image</Col>
      </Row>
        </Container>

    </motion.div>
);

export default Home;