import React, { useEffect,useState } from 'react';
import {motion} from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { dev,deploy } from '../../../network';
function Curd(){
  const[commentList,SetcommentList]= useState([]);
  const[load,setloading]=useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
   init();
  },[])

  const init=async ()=>{
    await fetch(dev+"/comment/")
      .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          SetcommentList(data);
      })
      .catch(error => {
          console.error('Error:', error);
      }); 
      setloading(false);
  }

  const post=(Commentname)=>{
    var now = new Date();
    var isoString = now.toISOString();
    setloading(true)
    fetch(dev+"/comment/",{method:"POST", body:JSON.stringify({ comment: Commentname , update :isoString}),headers: {"Content-Type": "application/json",}})
      .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          init()
          return response.json();
      })
      .catch(error => {
          console.error('Error:', error);
      }); 

  }

  const handleOnClick = (id) => {
      navigate("/comment/"+id)
    }
  
  const onFormSubmit = (e)=>{
    e.preventDefault();
    const comment = document.getElementById("Comment").value;
   post(comment)
  }

  if(load){
    <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
        <Container id='project'>
        <Row className="justify-content-md-center">
            <Col md="auto">
            <CircularProgress color="inherit" size={100}/> 
            </Col>  
        </Row>

        </Container>
      </motion.div>
  }else{
  return(
    <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
      <div style={{ width: '30%', margin: '1% 40%', position:"relative", }}>
      <strong>You can click the comment to view its detail information</strong>
      <Form onSubmit={onFormSubmit}>
          <Form.Label><strong>Leave your Comment here</strong></Form.Label>
          <Form.Control id="Comment" type="comment" placeholder="Enter name" />
        <Button variant="primary"  type='submit'>
          Submit
        </Button>
      </Form>
      <Table striped bordered hover style={{marginTop: "10%"}}>
      <thead>
        <tr>
          <th>Comment id</th>
          <th>Comment</th>
          <th>Date of creation</th>
        </tr>
      </thead>
      <tbody>
        {commentList.map((comment) => (
                  <tr key={comment.id}  onClick={()=>handleOnClick(comment.id)}>
                    <td>{comment.id}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.create.substring(0, 10)}</td>
                  </tr>  
        ))}
      </tbody>
      </Table>
    </div>
    </motion.div>
  )
}

}
export default Curd;