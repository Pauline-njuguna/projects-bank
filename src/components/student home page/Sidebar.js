import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="options" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="options" to="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link className="options" to="/login">
            Cohorts
          </Link>
        </li>
        <li>
          <Link className="options" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
