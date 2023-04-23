// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Header from "./components/student home page/Header";

function App() {
  return (
    
      <Routes>
        <Route path='/login' element={<Login/>}/>
         <Route path="/" element={<Header/>}/>
      </Routes>
    
  );
}

export default App;
