import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/student home page/Header";
import Cohorts from './components/Cohorts/Cohorts';
import Course from './components/student home page/Course';
import AddProject from './components/Addproject/addprojectform'
import Projects from './components/Project/project'
import LogoutForm from "./components/Logout/logout";
import Contact from './components/Contact/contact'
import Login from "./components/Login/login";
import Landingpage from "./components/Landing/landingpage";
import AboutUs from "./components/About/about";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import Sidebar from "./components/student home page/Sidebar";
import './App.css';

function App () {
	// const { currentUser } = useUser();

	return (
		<Router>
			<div id="page-container">

				<Sidebar />
				<main id="body-container">
					{ " " }
					{/*  */ }
					<Navbar />
					<Routes>
						<Route path="/" element={ <Landingpage /> } />
						<Route path="/login" element={ <Login /> } />
						<Route path="/about" element={ <AboutUs /> } />
						<Route path="/" element={ <Header /> } />
						<Route path="/contact" element={ <Contact /> } />
						<Route path="/add-project" element={ <AddProject /> } />
						<Route path="/projects" element={ <Projects /> } />
						<Route path="/cohorts" element={ <Cohorts /> } />{ " " }
						<Route exact path="/course/:id" component={ Course } />
						<Route path="/logout" element={ <LogoutForm /> } />
						<Route path="/profile" element={ <Profile /> } />
					</Routes>
					<Footer />
				</main>
			</div>
		</Router>
	);
}

export default App;

