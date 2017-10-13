import React from 'react';
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul>
        <li className="burger">
          <a className="dropbtn"><i className="fa fa-bars fa-3" aria-hidden="true"></i></a>
          <div className="dropdown-content">
            <a>Technologies</a>
            <a>About</a>
            <a>Portfolio</a>
            <a>Contact</a>
          </div>
        </li>
      </ul>
  </div>
  );
}

export default Navbar;
