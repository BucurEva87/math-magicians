import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => (
  <header>
    <a id="logo" href="/">
      <span>Math Magicians</span>
    </a>

    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
