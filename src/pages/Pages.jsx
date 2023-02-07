import React from 'react';
import Home from './Home';
import SignUp from "../components/SignUp";
import Agent from "../components/Agent";
import ContactUs from "../components/ContactUs";
import { Routes,Route } from "react-router-dom";

function Pages() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Signup" element={<SignUp/>}></Route>
        <Route path="/Agent" element={<Agent/>}></Route>
        <Route path="/Contactus" element={<ContactUs/>}></Route>        
        </Routes>
    </div>
  )
}

export default Pages