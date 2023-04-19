import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="options">
        <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="options">
          <NavLink to="/departments">Departments</NavLink>
        </li>
        <li className="options">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="options">
          
          <NavLink to="/contact">Messages</NavLink>
        </li>
        
      </ul>
      <div className='loout'>
        <button>LogOut</button>
      </div>
    </div>

  );
};

export default Sidebar; 
