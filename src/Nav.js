import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'

  }
  return (
    <nav>
        <h3>Planify</h3>
        <ul className = 'nav-links'>
          <Link style = {navStyle} to = '/'>
            <li>Home</li>
          </Link>
          <Link style = {navStyle} to = '/timer'>
            <li>Timer</li>
            </Link>
            <Link style = {navStyle} to = "/calendar">
            <li>Calendar</li>
            </Link>
            <Link style = {navStyle} to = "/chatbot">
            <li>Chatbot</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
