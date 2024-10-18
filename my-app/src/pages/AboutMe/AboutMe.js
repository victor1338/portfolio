import React from 'react';
import {motion} from "framer-motion";

const mtg= "https://api.scryfall.com/cards/random";

function mtg_data(){
  let card=""; //fetch mtg data from scryfall
 fetch(mtg)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    card=data["name"]
  })
  .catch(error => {
    console.error('Error:', error);
  });
  console.log(card);
  return card;
}

function card_name(){
  console.log("search random card")
  let result=mtg_data();
  //let card=JSON.parse(result);
  return result;
}


function AboutMe() {
  let name= card_name();
  return(
  <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
    <h1>About Me</h1>
    <strong>Victor Lee</strong>
    <h1> </h1>
  </motion.div>
  )
};

export default AboutMe;