import React from 'react';
import {
    Link,
} from 'react-router-dom'
import {motion} from "framer-motion";
import "../../App.css";
const Home = () => (
    <motion.div initial={ {opacity:0} } animate={{opacity:1}} transition={{duration:1}}>
        <div className='page_container'>
            <div className='centered-element'>
                I am Victor from CUHK
            </div>
        </div>

    </motion.div>
);

export default Home;