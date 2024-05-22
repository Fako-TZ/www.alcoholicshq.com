import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Assuming you have separate CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/discord" className="button">
              <i className="fab fa-discord"></i> Discord Server
            </Link>
          </li>
          <li>
            <a href="https://vrchat.com/home/group/grp_7fd5c4ad-eb62-4acd-8e1e-866f5de4ee95" className="button">
              <i className="fas fa-users"></i> VRChat Group
            </a>
          </li>
          <li>
            <a href="https://vrchat.com/home/world/wrld_939c0227-52d7-46ac-9d6a-8cd8cb5c7960" className="button">
              <i className="fas fa-globe"></i> VRChat World
            </a>
          </li>
          <li>
            <Link to="/Helpers" className="button"> {/* Use Link component for "WIP" button */}
              <i className="fas fa-images"></i> Helpers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
