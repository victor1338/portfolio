import React, { useEffect,useState } from 'react';
import {motion} from "framer-motion";
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";
import {Link} from 'react-router-dom';
function Curd(){
    const[userList,SetuserList]= useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/test_app/")
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data[0]);
                SetuserList(data);
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
    },[])
    const index=(user)=>(
      userList.indexOf(user)+1
    )
    return (
        <>
        {userList.map((user) => (
         
          <ListGroup key={userList.indexOf(user)} horizontal={user} className="my-2">
            <ListGroup.Item>User name</ListGroup.Item>
            <ListGroup.Item><Link to={{pathname:'/User/'+index(user).toString()}}  className='Nav-link'>{user.username}{userList.indexOf(user)}</Link></ListGroup.Item>
          </ListGroup>
        ))}
      </>
    )

}
export default Curd;