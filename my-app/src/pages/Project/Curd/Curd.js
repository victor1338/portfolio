import React, { useEffect,useState } from 'react';
import {motion} from "framer-motion";

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
                console.log(data);
                SetuserList(data);
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
    })

}