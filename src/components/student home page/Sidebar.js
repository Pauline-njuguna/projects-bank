import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="options">
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className="options">
          <NavLink to="/departments">Departments</NavLink>
        </li>
        <li className="options">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="options">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar; 
