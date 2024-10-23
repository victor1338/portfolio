import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Mtg() {
  const [Card,setCard]=useState(null);
  const [Cardimg,setCardimg]=useState(null);
  const [CardName,setCardName]=useState("");
  const [CardList,setCardList]=useState([]);
  const [Result,setResult]=useState({ "image_uris": {"normal":""}});
  const [Loading,setLoading]=useState(false);
  const [init,Setinit]=useState(true);


  useEffect(()=>{
    Setinit(true);
    console.log("test_useEffect");
    const init=async()=>
    {await fetch("https://api.scryfall.com/cards/random")
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
            await fetch("https://api.scryfall.com/symbology")
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error('Error:', error);
            }); 
            Setinit(false);
      }
      init();

    },[]
  )

  function FailToLoad(Test){
    if(Test){
      alert("Your network cannot load image from Scryfall");
    }
  }


  const handleInput = (e,Newvalue)=> {
    setCardName(Newvalue);
    fetch_mtg_datalist(Newvalue);
  }

  const handleChange= (e,value)=>{
    fetch_mtg_data(value);
  }

  async function fetch_mtg_data (value){
    console.log(value);
 
    if(value!==null){
      if (value.includes(" ")){
        value= value.replaceAll(" ","+");}}

    await fetch("https://api.scryfall.com/cards/named?exact="+ value)
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
    });
   
  }

  async function fetch_mtg_datalist (value){
    setLoading(true);
    if(value!==null){
      if (value.includes(" ")){
        value= value.replaceAll(" ","+");}}

    await fetch("https://api.scryfall.com/cards/autocomplete?q="+ value)
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
      });
    setLoading(false);
  }

  if (init){
    return (
    <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
      <Container id='project'>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <CircularProgress color="inherit" size={100}/> 
          </Col>  
        </Row>

      </Container>
    </motion.div>
    )
  }
  else{
    return(
      <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
        <Container className='d-grid gap-3'>
          <Row>
            <h1 > {Card}</h1>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto"> <img src={Cardimg}/> </Col>
          </Row>
          <Row>
            Search For a Card
          </Row>
          <Row>
            <Autocomplete
            value={CardName}
            options={CardList}
            sx={{ width: 300 }}
            onInputChange={handleInput}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} label="Search Card" slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {Loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                },
              }}/>}
            />
          </Row>
          <Row>
          {Result.name}<br/>
          {Result.oracle_text}
          </Row>
          <Row className="justify-content-md-center">
          <Col md="auto"><img src={Result.image_uris.normal} defaultValue={""}/></Col>
          </Row>
        </Container>
    
      
      </motion.div>
    
     
      )
  }
  
};

export default Mtg;