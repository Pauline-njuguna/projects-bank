import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link classname="options"to="/messages">Messages</Link>
        </li>
        <li>
          <Link  classname="options" to="/departments">Departments</Link>
        </li>
        <li>
          <Link classname="options"  to="/projects">Projects</Link>
        </li>
        <li>
          <Link classname="options" to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link classname="options" to="/projects-link">Projects link</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 
