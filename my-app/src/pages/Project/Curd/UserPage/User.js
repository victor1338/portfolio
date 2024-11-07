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
import { dev,deploy } from '../../../../network';

function User (props)  {
    const[commentID,setcommentID]=useState(useParams().commentID);
    const[comment,setcomment]=useState();
    const[loading,setloading]=useState(true);
    const[create,Setcreate]=useState();
    const[update,Setupdate]=useState();
    const navigate = useNavigate();
    useEffect(()=>{
        init();
    },[])
    const init=async()=>{
        await fetch(dev+"/comment/"+commentID)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setcomment(data);
                var create = new Date(data.create);
                Setcreate(create.toString())
                var update = new Date(data.update);
                Setupdate(update.toString())
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
            setloading(false);
        }
    async function handleDelete(){
        try{        
            await fetch(dev+"/comment/"+commentID+"/", {method: "DELETE",headers: { "content-type": "application/json", }})
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
    const put=(comment)=>{
        var now = new Date();
        var isoString = now.toISOString();
        console.log(isoString)
        fetch(dev+"/comment/"+commentID+"/",{method:"PATCH", body:JSON.stringify({ comment: comment , update :isoString}),headers: {"Content-Type": "application/json",}})
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
      
  const onFormSubmit = (e)=>{
    e.preventDefault();
    const comment = document.getElementById("comment").value;
   put(comment)
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
                            {comment.commentname}
                        </Card.Title>
                        <Card.Text>
                            Create date:  {create.substring(4,25)}<br/>
                            Last update: {update.substring(4,25)}
                        </Card.Text>
                        <Button variant="danger" onClick={handleDelete}>Delete comment</Button>
                    </Card.Body>
                </Card>
                <Form onSubmit={onFormSubmit}>
                    <Form.Label><strong>Change comment</strong></Form.Label>
                    <Form.Control id="comment" type="commentname" placeholder="Change the comment" />
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