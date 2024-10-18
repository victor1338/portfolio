import React from 'react';
import {
    Link,
} from 'react-router-dom'
import {motion} from "framer-motion";
const Home = () => (
    <motion.div initial={ {opacity:0} } animate={{opacity:1}} exit={{opacity:0}}>
        I am Victor from CUHK
    </motion.div>
);

export default Home;