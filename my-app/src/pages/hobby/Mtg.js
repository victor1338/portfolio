import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';


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


  return(
  <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
    <h1> {Card}</h1>
    <img src={Cardimg} alt="Card Image URL invalid"/>
  </motion.div>
  )
};

export default Mtg;