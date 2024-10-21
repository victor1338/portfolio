import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import { useState } from 'react';


function AboutMe() {


  return(
  <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}} >
    <h1>About Me</h1>
    <strong>Victor Lee</strong>
  </motion.div>
  )
};

export default AboutMe;