import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Sidebar from "./Sidebar";
import LogoutForm from "../Logout/logout";

const Course = () => {
  return (
    <div className="course">
      <Link to="/fullstack">
        <div className="stack">
          <img
            className="pictures"
            src="https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/images/blog/full-stack-development-project.png"
            alt="fullstack"
          />
          <span> Full-stack Development</span>
        </div>
      </Link>
      <Link to="/datascience">
        <div className="stack">
          <img
            className="pictures"
            src="https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg"
            alt="data science"
          />
          <span> Data Science</span>
        </div>
      </Link>
      <Link to="/android">
        <div className="stack">
          <img
            className="pictures"
            src="https://cdn.hackr.io/uploads/posts/large/1597418704Ko2SSJxhVk.png"
            alt="mobile project"
          />
          <span> Android Development</span>
        </div>
      </Link>
      <Link to="/cybersecurity">
        <div className="stack">
          <img
            className="pictures"
            src="https://www.itu.int/en/ITU-D/Cybersecurity/PublishingImages/Projects.jpg"
            alt="Cyber security"
          />
          <span> Cyber Security</span>
        </div>
      </Link>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();

  // Define handleLogout function to handle logout
  const handleLogout = (event) => {
    // Implement your logout logic here
    // e.g. call an API to logout the user, clear local storage, etc.
    event.preventDefault();
    navigate("/logout/");
  };

  return (
    <>
      <div className="header">
        <img
          src="https://o.remove.bg/downloads/56ab9f75-f768-4336-b1e6-52ad53ef7b0b/b0d7e1b5aa7fabb42bc1d622a1bedbc5--library-logo-technology-logo-removebg-preview.png"
          alt="logo"
        />
        <h2>P-Bank</h2>
        
        <div className="student-logout">
          <button className="logout" onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
      <Sidebar />
      <Course />
      <LogoutForm handleLogout={handleLogout} />
    </>
  );
}

export default Header;
