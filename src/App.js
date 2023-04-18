import React from 'react';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/layout';
import Cohorts from './components/Cohorts';
import CohortForm from './components/CohortForm';
import Projects from './components/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" component={App} />
          <Route path="/cohorts" component={Cohorts} />
          <Route path="/cohortform" component={CohortForm} />
          <Route path="/projects" component={Projects} />
          <Route/>
        </Routes>
       
      </Layout>
    </BrowserRouter>
    
  );
};

export default App;
