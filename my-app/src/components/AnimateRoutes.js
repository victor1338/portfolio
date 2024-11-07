import React from "react";
import {
    useLocation,
    Route,
    Routes,
  } from 'react-router-dom';
import AboutMe from '../pages/AboutMe/AboutMe';
import Home from "../pages/Home/Home";
import Mtg from "../pages/Project/hobby/Mtg";
import Projects from "../pages/Project/Project";
import Test from "../pages/Test/Test";
import User from "../pages/Project/Curd/UserPage/User"
import Curd from "../pages/Project/Curd/Curd";
import Digit from "../pages/Project/Digit/Digit"
import {AnimatePresence} from "framer-motion";

function AnimateRoutes(){
    const location= useLocation();
    return(
        <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path={'/portfolio'}></Route>
          <Route element={<AboutMe />} path={'/AboutMe'}></Route>
          <Route element={<Mtg />} path={'/Project/Mtg'}></Route>
          <Route element={<Projects />} path={'/Project'}></Route>
          <Route element={<Test />} path={'/Test'}></Route>
          <Route element={<User/> } path={"/comment/:commentID"} ></Route>
          <Route element={<Curd/> } path={"/Curd"} ></Route>
          <Route element={<Digit/> } path={"/Digit"} ></Route>
        </Routes>
        </AnimatePresence>
            )
}
export default AnimateRoutes;