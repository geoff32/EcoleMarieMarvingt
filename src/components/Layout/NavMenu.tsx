import React from 'react';
import Link from '../Link/Link';
import './NavMenu.css';

const NavMenu: React.FC = () => (
  <header className="nav-menu">
    <nav className="navbar">
      <div className="d-flex">
        <span className="app-title"><Link to="/">Ecole Marie Mavingt</Link></span>
        <div className="menu-container d-flex">
          <ul className="menu">
            <li className="menu-item"><Link to="/newsletters">NewsLetters</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default NavMenu;