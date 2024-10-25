import React, { useEffect,useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {motion} from "framer-motion";
import "../../../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function User (props)  {
    const[userID,setuserID]=useState(useParams().userID);
    const[user,setuser]=useState();
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/test_app/"+userID)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setuser(data);
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
    },[])
    return(
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )

};

export default User;