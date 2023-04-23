
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/student home page/Header";
import Cohorts from './components/Cohorts/Cohorts'; // Import your Cohorts component
import Course from './components/student home page/Course';
import AddProject from './components/Addproject/addprojectform'
import Projects from './components/Project/project'
import Login from './components/Login/login'
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
  );
}

export default App;
