import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";


function Mtg() {
  const [Card,setCard]=useState(null);
  const [Cardimg,setCardimg]=useState(null);

  async function mtg_data(){
    //fetch mtg data from scryfall
    await fetch("https://api.scryfall.com/cards/random")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setCard(data.name);
      setCardimg(data.image_uris.normal);
      FailToLoad(Cardimg===null);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  useEffect(()=>{
    console.log("test_useEffect");
      mtg_data();
    },[]
  )

  function FailToLoad(Test){
    if(Test){
      alert("Your network cannot load image from Scryfall");
    }
  }


  return(
  <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
    <h1> {Card}</h1>
    <img src={Cardimg}/>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search your card</Form.Label>
        <Form.Control type="card" placeholder="Enter card name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  </motion.div>
  )
};

export default Mtg;