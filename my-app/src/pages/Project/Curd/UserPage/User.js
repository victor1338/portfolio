import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import {useParams,useNavigate} from 'react-router-dom';
import "../../../../App.css";
import CircularProgress from '@mui/material/CircularProgress';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {motion} from "framer-motion";
function User (props)  {
    const[userID,setuserID]=useState(useParams().userID);
    const[user,setuser]=useState();
    const[loading,setloading]=useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        init();
    },[])
    const init=async()=>{
        await fetch("http://127.0.0.1:8000/test_app/"+userID)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.username);
                setuser(data);

            })
            .catch(error => {
                console.error('Error:', error);
            }); 
            setloading(false);
        }
    async function handleDelete(){
        try{        
            await fetch("http://127.0.0.1:8000/test_app/"+user.my_id+"/", {method: "DELETE",headers: { "content-type": "application/json", }})
            .then((response)=>{
                if (response.status===404){
                    navigate(-1)
                }
            })
            }catch (error){
            navigate(-1);
            };

        navigate(-1);
        

    }
    const put=async (comment)=>{
        setloading(true)
        await fetch("http://127.0.0.1:8000/test_app/"+user.my_id+"/",{method:"PUT", body:JSON.stringify({ username: comment }),headers: {"Content-Type": "application/json",}})
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
      
  const onFormSubmit = (e)=>{
    e.preventDefault();
    const username = document.getElementById("comment").value;
   put(username)
  }
    if(loading){
        return (
            <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
                <Container id='project'>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <CircularProgress color="inherit" size={100}/> 
                    </Col>  
                </Row>
                </Container>
            </motion.div>)
    }
    else
        {
            return(
                <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
                <div style={{ width: '30%', margin: '1% 40%', position:"relative", }}>
                <Card >
                    <Card.Body>
                        <Card.Title>
                            {user.username}
                        </Card.Title>
                        <Card.Text>
                            Create date: {user.create.substring(0, 10)}
                        </Card.Text>
                        <Button variant="danger" onClick={handleDelete}>Delete User</Button>
                    </Card.Body>
                </Card>
                <Form onSubmit={onFormSubmit}>
                    <Form.Label>Change comment</Form.Label>
                    <Form.Control id="comment" type="username" placeholder="Change the comment" />
                    <Button variant="primary"  type='submit'>
                    Submit
                    </Button>
                </Form>
                </div>
                </motion.div>
            )

        }
};

export default User;