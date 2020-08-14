import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
   

  } 
  return (
    <div>
    <nav>
       
        <ul className = 'nav-links'>
          <Link style = {navStyle} to = '/'>
            <li>Planify</li>
          </Link>
          <Link style = {navStyle} to = '/timer'>
            <li>Clockify</li>
            </Link>
            <Link style = {navStyle} to = "/calendar">
            <li>Calendify</li>
            </Link>
            <Link style = {navStyle} to = "/chatbot">
            <li>Chatify</li>
            </Link>
            <Link style = {navStyle} to = "/music">
              <li> Tuneify </li>

            </Link>
        </ul>
    </nav>
    </div>
  );
}

export default Nav;
