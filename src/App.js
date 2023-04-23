// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Header from "./components/student home page/Header";
import Contact from "./components/contactpage/Contact";

function App() {
  return (
    
      <Routes>
        <Route path='/login' element={<Login/>}/>
         <Route path="/" element={<Header/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
  );
}

export default App;
