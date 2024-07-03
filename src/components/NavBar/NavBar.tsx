import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar:React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Static Pages
        </NavLink>

        <ul className="navList d-flex flex-row gap-3 flex-nowrap">

          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          |
          <li className="nav-item">
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
          </li>
          |
          <li className="nav-item">
            <NavLink to="/Contacts" className="nav-link">
              Contacts
            </NavLink>
          </li>
          |
          <li className="nav-item">
            <NavLink to="/Divisions" className="nav-link">
              Divisions
            </NavLink>
          </li>
|
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;