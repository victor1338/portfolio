import React from 'react';
import {motion} from "framer-motion";
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => (
    <motion.div className='home py-5' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
        <Container className="h-100 d-flex flex-column justify-content-center">
        <Row className="align-items-center flex-column-reverse flex-md-row">
        <Col md={7} className="mt-5 mt-md-0 px-4">
        <div>
          <h1 className="fw-bold display-3 mb-3">Victor Lee</h1>
          <h2 className="text-muted fw-light mb-4">Hi there!</h2> 
          <p className="lead">This is a page for storing my own works, feel free to try it out!</p>
        </div>
        </Col>
        <Col md={5} className="text-center">
          <img className="img-fluid rounded-circle shadow-lg" style={{maxWidth: '300px'}} alt="Victor Lee" src={require('../../image/VictorLee_image.JPG')}/>
        </Col>
      </Row>
      </Container>
    </motion.div>
);

export default Home;