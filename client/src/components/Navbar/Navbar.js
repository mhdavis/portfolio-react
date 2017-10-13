import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="topnav" id="myTopnav">
        <Link to="/tech">Tech</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
