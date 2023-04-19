import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="options">
        <NavLink to="/dashboard"> <h3>Dashboard</h3> </NavLink>
        </li>
        <li className="options">
          <NavLink to="/"><h3>Courses</h3></NavLink>
        </li>
        <li className="options">
          <NavLink to="/projects"><h3>Projects</h3></NavLink>
        </li>
        <li className="options">
          
          <NavLink to="/contact"><h3>Messages</h3></NavLink>
        </li>
        
      </ul>
      <div className='loout'>
        <button>LogOut</button>
      </div>
    </div>

  );
};

export default Sidebar; 