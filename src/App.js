<<<<<<< HEAD
// import React from 'react';
// import { Routes } from 'react-router-dom';
// import { BrowserRouter, Route} from 'react-router-dom';
// import Layout from './components/layout';
// import Cohorts from './components/Cohorts';
// import CohortForm from './components/CohortForm';
// import Projects from './components/Projects';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route exact path="/" component={App} />
//           <Route path="/cohorts" component={Cohorts} />
//           <Route path="/cohortform" component={CohortForm} />
//           <Route path="/projects" component={Projects} />
//           <Route/>
//         </Routes>
       
//       </Layout>
//     </BrowserRouter>
    
//   );
// };

// export default App;
// import './App.css';
=======
>>>>>>> c4ebd70 (Creates a clients pathway both for the student and andmin)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
<<<<<<< HEAD

function App() {
  return (
    <>

   <Login/>

    </>
=======
import Header from "./components/student home page/Header";
import Cohorts from './components/Cohorts'; // Import your Cohorts component
import Course from './components/student home page/Course';
import AddProject from './components/Addproject/addprojectform'
import Projects from './components/Project/project'
import LogoutForm from "./components/Logout/logout";
import Contact from './components/Contact/contact'
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your routes with the Router component */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cohorts" element={<Cohorts />} />{" "}
        <Route exact path="/course/:id" component={Course} />
        <Route path="/logout" element={<LogoutForm />} />
      </Routes>
    </Router>
>>>>>>> c4ebd70 (Creates a clients pathway both for the student and andmin)
  );
}

export default App;