import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <button>
            <NavLink
              to="/challenge13-react-app/"
              end
              className="nav-link"
            >
              Home
            </NavLink>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <NavLink
              to="challenge13-react-app/about"
              className="nav-link"
            >
              About
            </NavLink>
            </button>
        </li>
        {/* <li className="nav-item">
          <button>
            <NavLink
              to="challenge13-react-app/blog"
              className="nav-link"
            >
              Blog
            </NavLink>
          </button>
        </li> */}
        <li className="nav-item">
          <button>
            <NavLink
              to="challenge13-react-app/contact"
              end
              className="nav-link"
          
            >
              Contact
            </NavLink>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <NavLink
              to="challenge13-react-app/projects"
              className="nav-link"
            >
              Projects
            </NavLink>
          </button> 
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
