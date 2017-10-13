import React from 'react';
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="topnav" id="myTopnav">
        <a href="#home">Tech</a>
        <a href="#news">About</a>
        <a href="#contact">Portfolio</a>
        <a href="#about">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
