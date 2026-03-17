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
        <motion.div className="min-vh-100 bg-light py-5" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold">My Projects</h2>
                    <p className="lead text-muted">Here are some of the things I've been working on.</p>
                </div>
                <Row className="g-4">
                    <Col md={6} lg={6}>
                        <Card as={Link} to="/Project/Mtg" className="h-100 shadow-sm text-decoration-none border-0 project-card-hover">
                            <Card.Body className="d-flex flex-column justify-content-center text-center p-5">
                                <Card.Title className="fs-3 mb-3 fw-bold text-dark">Search for a MTG card</Card.Title>
                                <Card.Text className="text-muted fs-5">A project fetching data from Scryfall with an API call</Card.Text>
                            </Card.Body>
                        </Card>                                                      
                    </Col>

                    <Col md={6} lg={6}>
                        <Card as={Link} to="/Curd" className="h-100 shadow-sm text-decoration-none border-0 project-card-hover">
                            <Card.Body className="d-flex flex-column justify-content-center text-center p-5">
                                <Card.Title className="fs-3 mb-3 fw-bold text-dark">CRUD function test</Card.Title>
                                <Card.Text className="text-muted fs-5">A page to test if the backend works correctly</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col md={6} lg={6}>
                        <Card as={Link} to={'/Digit'} className="h-100 shadow-sm text-decoration-none border-0 project-card-hover">
                            <Card.Body className="d-flex flex-column justify-content-center text-center p-5">
                                <Card.Title className="fs-3 mb-3 fw-bold text-dark">Digit Recognition</Card.Title>
                                <Card.Text className="text-muted fs-5">A trained neural network to recognize handwriting digits</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={6} lg={6}>                        
                        <Card className="h-100 shadow-sm text-decoration-none border-0 project-card-hover">
                            <Card.Body className="d-flex flex-column justify-content-center text-center p-5">
                                <Card.Title className="fs-3 mb-3 fw-bold text-dark">Coming Soon</Card.Title>
                                <Card.Text className="text-muted fs-5">New project will be released shortly...</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </motion.div>

    )
};

export default Projects;