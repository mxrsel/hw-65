import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar:React.FC = () => {
  return (
    <nav className="nav-bar">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Static Pages
        </NavLink>
        <div/>


        <ul className='navbar-list d-flex flex-row gap-3 flex-nowrap'>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/about">
              About
            </NavLink>

            <NavLink className="nav-link" to="/contacts">
              Contacts
            </NavLink>

            <NavLink className="nav-link" to="/divisions">
              Divisions
            </NavLink>

            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;