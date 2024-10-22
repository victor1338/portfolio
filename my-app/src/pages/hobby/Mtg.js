import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function Mtg() {
  const [Card,setCard]=useState(null);
  const [Cardimg,setCardimg]=useState(null);
  const [CardName,setCardName]=useState("");
  const [CardList,setCardList]=useState([]);
  const [Result,setResult]=useState([]);


  useEffect(()=>{
    console.log("test_useEffect");
    fetch("https://api.scryfall.com/cards/random")
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
    },[]
  )

  function FailToLoad(Test){
    if(Test){
      alert("Your network cannot load image from Scryfall");
    }
  }


  const handleInput = (e,Newvalue)=> {
    setCardName(Newvalue);
    fetch_mtg_datalist();
  }

  async function handleChange (e,value){
    fetch_mtg_data(value);
  }

  const fetch_mtg_data =(value)=>{
    console.log(value);
    if(value!==null){
      if (value.includes(" ")){
        value= value.replaceAll(" ","+");}}
    fetch("https://api.scryfall.com/cards/named?exact="+ value)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setResult(data);
      console.log(Result);
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

  const fetch_mtg_datalist =()=>{
    let name = CardName;
    if(name!==null){
      if (name.includes(" ")){
        name= name.replaceAll(" ","+");}}
    fetch("https://api.scryfall.com/cards/autocomplete?q="+ name)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setCardList(data.data);
      console.log(CardList);
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

  return(
  <motion.div>
    <h1 > {Card}</h1>
    <img src={Cardimg}/>
    <Autocomplete
      value={CardName}
      options={CardList}
      sx={{ width: 300 }}
      onInputChange={handleInput}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Card" />}
    />
    {Result.name}
    {Result.oracle_text}
  </motion.div>

 
  )
};

export default Mtg;