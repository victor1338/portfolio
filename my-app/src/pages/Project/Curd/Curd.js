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

function Curd(){
  const[userList,SetuserList]= useState([]);
  const[load,setloading]=useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
   init();
  },[])

  const init=async ()=>{
    await fetch("http://127.0.0.1:8000/test_app/")
      .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          SetuserList(data);
      })
      .catch(error => {
          console.error('Error:', error);
      }); 
      setloading(false);
  }

  const post=async (Username)=>{
    setloading(true)
    await fetch("http://127.0.0.1:8000/test_app/",{method:"POST", body:JSON.stringify({ username: Username }),headers: {"Content-Type": "application/json",}})
      .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch(error => {
          console.error('Error:', error);
      }); 
      init()
  }

  const handleOnClick = (userid) => {
      navigate("/User/"+userid)
    }
  
  const onFormSubmit = (e)=>{
    e.preventDefault();
    const username = document.getElementById("Comment").value;
   post(username)
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
          <Form.Control id="Comment" type="username" placeholder="Enter name" />
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
        {userList.map((user) => (
                  <tr key={user}  onClick={()=>handleOnClick(user.my_id)}>
                    <td>{user.my_id}</td>
                    <td>{user.username}</td>
                    <td>{user.create.substring(0, 10)}</td>
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