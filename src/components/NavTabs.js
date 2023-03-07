import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/challenge13-react-app/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="challenge13-react-app/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="challenge13-react-app/blog"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="challenge13-react-app/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="challenge13-react-app/contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Learn
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="challenge13-react-app/projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
