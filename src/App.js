// import './App.css';
import React from "react";
 import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Header from "./components/student home page/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
         <Route path="/" element={<Header/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
