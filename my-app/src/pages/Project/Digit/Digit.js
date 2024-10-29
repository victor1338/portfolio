import React,{ useState } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import {motion} from "framer-motion";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Digit(){
    const [img,Setimg]=useState();
    const [number,Setnumber] = useState();
    const [sigPad,SetsigPad] = useState();
    return(
        <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
        <div style={{ width: '30%', margin: '1% 35%', position:"relative", }}>
            <Container>
                <Row>
                    <Col>
                        write something
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SignatureCanvas penColor='green' 
                                         backgroundColor='black' 
                                         canvasProps={{width: 200, height: 200}} 
                                         minWidth={10} 
                                         maxWidth={10} 
                                         velocityFilterWeight={0.1} 
                                         ref={(ref) => {SetsigPad(ref)}}/>
                    </Col>
                </Row>
            </Container>

        </div>
        </motion.div>
     

    )
}
export default Digit;