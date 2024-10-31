import React from 'react';
import {motion} from "framer-motion";
import Card from 'react-bootstrap/Card';
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Projects=()=>{

    return (
        <motion.div style={{height:'95vh'}} initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
            <Container className='d-grid gap-3' id='project'>
                <Row  >
                    <Col>
                        <Card  as={Link} to="/Project/Mtg" id='project-card'>
                            <div id ='project-block'>
                            <Card.Title>Search for a mtg card</Card.Title>
                            <Card.Body>A project fetch the data from Scryfall with API call</Card.Body>
                            </div>
                        </Card>                                                      
                    </Col>

                    <Col>
                        <Card id='project-card' to="/Curd" as={Link}>
                            <div id='project-block'>
                            <Card.Title>Crud function test</Card.Title>
                            <Card.Body>A page to test if backend works</Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card as={Link} to={'/Digit'} id='project-card'>
                            <div id='project-block'>
                            <Card.Title>Digit Recognition</Card.Title>
                            <Card.Body>A trained neural network to recongize hand writing digit</Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>                        
                        <Card as={Link} id='project-card'>
                            <div id='project-block'>
                            <Card.Title>Working Project</Card.Title>
                            <Card.Body>The project will come out soon...</Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </motion.div>

    )
};

export default Projects;