import React,{ useState } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import {motion} from "framer-motion";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../../../App.css"
function Digit(){
    const [number,Setnumber] = useState("");
    const [prob,Setprob] = useState("");
    const [sigPad,SetsigPad] = useState(" ");

    const clear=()=>{
        sigPad.clear();
        console.log('clear')
    }

    const handleRecongnise=async ()=>{
        const url= sigPad.getCanvas().toDataURL('image/png');
        console.log(url)
        await fetch("http://web-production-a96f.up.railway.app/Digit/",{ method:"POST",body:JSON.stringify({"imageUrl":{url}}),headers: {"Content-Type": "multipart/form-data",} } )
                .then(response => {
                    if (!response.ok) {
                    throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data)=>{
                    Setnumber(data.prediction);
                    Setprob(data.probability);
                })
                .catch(error => {
                    console.error('Error:', error);
                }); 
        
    }
    return(
        <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
        <div style={{ width: '30%', margin: '1% 35%', position:"relative", }}>
            <Container className='digit'>
                <Row>
                    <Col>
                        <h2>Digit Recognition</h2>
                    </Col>
                </Row>
                <Row>
                    <p><strong>Write a digit and click "regconise"</strong></p>
                </Row>
                <Row>
                    <Col>
                        <div className='Sign-container'>
                            <SignatureCanvas penColor='red'
                                            
                                            canvasProps={{className: "sigCanvas" }} 
                                            minWidth={25} 
                                            maxWidth={25} 
                                            velocityFilterWeight={0.1} 
                                            ref={(ref) => {SetsigPad(ref)}}/>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary"  onClick={clear}>Clear  </Button>
                    </Col>
                    <Col>
                        <Button onClick={handleRecongnise}> Recognise</Button>
                    </Col>
                </Row>

                <Row>
                    <Col><p>Prediction:{number}</p></Col> <Col><p>Confidence:{prob.substring(2,4)}.{prob.substring(4,6)}%</p></Col>
                </Row>
                <Row>
                    <p>There are some inaccuracy due to the input are not pure hand writing</p>
                </Row>
            </Container>

        </div>
        </motion.div>
     

    )
}
export default Digit;