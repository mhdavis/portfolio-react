import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="body-frame">

        <div className="home-title-box center">
          <h1 className="primary-title">Michael H. Davis</h1>
          <h2 className="secondary-title">Fullstack Developer</h2>
        </div>

        <div id="about-link">
          <Link to="/about">
            <button className="home-link">About</button>
          </Link>
        </div>

        <div id="tech-link">
          <Link to="/tech">
            <button className="home-link">Tech</button>
          </Link>
        </div>

        <div id="portfolio-link">
          <Link to="/portfolio">
            <button className="home-link">Portfolio</button>
          </Link>
        </div>

        <div id="contact-link">
          <Link to="/contact">
            <button className="home-link">Contact</button>
          </Link>
        </div>

        </div>
      </div>
    );
  }
}

export default Home;
