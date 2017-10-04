import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="body-frame">

        <div className="home-title center">
          <h1 className="primary-title">Michael H. Davis</h1>
          <h2 className="secondary-title">Fullstack Developer</h2>
        </div>

        <Link to="/about">
          <button id="about-link" className="home-link left">About</button>
        </Link>
        <Link to="/tech">
          <button id="tech-link" className="home-link">Tech</button>
        </Link>
        <Link to="/portfolio">
          <button id="portfolio-link" className="home-link">Portfolio</button>
        </Link>
        <Link to="/contact">
          <button id="contact-link" className="home-link">Contact</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Home;
