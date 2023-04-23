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