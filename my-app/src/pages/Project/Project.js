import React from 'react';
import {motion} from "framer-motion";
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Projects=()=>{

    return (
        <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
            <Container className='d-grid gap-10' id='project'>
                <Row >
                    <Col>
                    <Link to="/Project/Mtg" className='Nav-link'><h3>Search for a mtg card</h3><br/>
                                                        <p>A project fetch the data from Scryfall with API call</p></Link>
                    </Col>
                    <Col>
                    <Link to="/Curd" className='Nav-link'><h3>Crud function test</h3><br/>
                                                        <p>A page to test if backend works</p></Link>
                    </Col>
                </Row>
                <Row>
                    <Col> <Link to="/Digit" className='Nav-link'><h3>Digit Recognition</h3><br/>
                                                        <p>A trained neural network to recongize hand writing digit</p></Link></Col>
                    <Col>Project 4</Col>
                </Row>
            </Container>
        </motion.div>

    )
};

export default Projects;