import React from "react";
import {
    useLocation,
    Route,
    Routes,
  } from 'react-router-dom';
import AboutMe from '../pages/AboutMe/AboutMe';
import Home from "../pages/Home/Home";
import {AnimatePresence} from "framer-motion";

function AnimateRoutes(){
    const location= useLocation();
    return(
        <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path={'/'}></Route>
          <Route element={<AboutMe />} path={'/AboutMe'}></Route>
        </Routes>
        </AnimatePresence>
            )
}
export default AnimateRoutes;