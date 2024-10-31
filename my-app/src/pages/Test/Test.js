import React ,{useEffect}from 'react';
import {motion} from "framer-motion";
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Test() {
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/test_app/" )
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
    }
    )
    return(
    <motion.div   initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>


            Test page

    </motion.div>)
};

export default Test;