import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  render() {
    return (
      <div className="home-container">

        {/* Top Shelf */}
        <Row center="xs" top="xs">
          <Col xs={12}>
            <Link to="/tech">
              <button id="tech-link" className="home-link">Tech</button>
            </Link>
          </Col>
        </Row>

        {/* Middle Shelf */}
        <Row between="xs" middle="xs">
          <Col xs={2}>
            <Row middle="xs">
              <Link to="/about">
                <button id="about-link" className="home-link">About</button>
              </Link>
            </Row>
          </Col>

          <Col xs={8}>
            <div className="logo-box">
              <h1 className="primary-title">Michael H. Davis</h1>
              <h2 className="secondary-title">Fullstack Developer</h2>
            </div>
          </Col>

          <Col xs={2}>
            <Row middle="xs" end="xs">
              <Link to="/portfolio">
                <button id="portfolio-link" className="home-link">Portfolio</button>
              </Link>
            </Row>
          </Col>
        </Row>

        {/* Bottom Shelf */}
        <Row center="xs" bottom="xs">
          <Col xs={12}>
            <Link to="/contact">
              <button id="contact-link" className="home-link">Contact</button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
