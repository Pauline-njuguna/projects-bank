// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./components/contactpage/Contact";

function App() {
  return (
    
      <Routes>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
  );
}

export default App;
