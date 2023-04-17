// import './App.css';
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import AddProjectForm from "./components/Addproject/addprojectform"
import CohortForm from "./components/cohortform/cohortform";

function App() {
  return (
    <>
   <Login/>
   <AddProjectForm/>
   <CohortForm/>
    </>
  );
}

export default App;
