import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => (
  <header data-testid="header-header">
    <a id="logo" href="/" data-testid="header-logo">
      <span data-testid="header-logo-span">Math Magicians</span>
    </a>

    <nav data-testid="header-nav">
      <ul data-testid="header-nav-ul">
        <li data-testid="header-li-1"><NavLink to="/">Home</NavLink></li>
        <li data-testid="header-li-2"><NavLink to="/calculator">Calculator</NavLink></li>
        <li data-testid="header-li-3"><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
