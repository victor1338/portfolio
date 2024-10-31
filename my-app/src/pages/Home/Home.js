import React from 'react';
import {motion} from "framer-motion";
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => (
    <motion.div className='home'  initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
        <Container >
        <Row>
        <Col >
        <p id='center-vertical'><h1 id="header">Victor Lee</h1> <br/>
        <smol id="smol">Hi there! </smol> 
        This is a page for storing my own works, feel free to try it out!
        </p>
        </Col>
        <Col  style={  {position: 'relative', top: '10vh'} }><img width='80%' height="auto" src={require('../../image/VictorLee_image.JPG')}/></Col>
      </Row>
        </Container>

    </motion.div>
);

export default Home;