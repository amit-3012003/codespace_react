// src/components/NavBar.jsx
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;