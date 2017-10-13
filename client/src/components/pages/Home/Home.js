import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Row, Col } from 'react-flexbox-grid';
import Navbar from './../../Navbar/Navbar';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        {/* Top Shelf */}
        <Row className="top-shelf" center="xs" top="xs">
          <Col xs={12}>
            <Navbar/>

            <div className="tech-link-container">
              <Link to="/tech">
                <button id="tech-link" className="home-link">TECH</button>
              </Link>
            </div>

          </Col>
        </Row>

        {/* Middle Shelf */}
        <Row className="middle-shelf" between="xs" middle="xs">
          <Col xs={0} sm={1} md={1} lg={1}>
            <Row middle="xs">
              <Link to="/about">
                <button id="about-link" className="home-link">ABOUT</button>
              </Link>
            </Row>
          </Col>

          <Col xs={12} sm={10} md={10} lg={10}>
            <div className="logo-box">
              <h1 className="primary-title">Michael H. Davis</h1>
              <h2 className="secondary-title">Fullstack Developer</h2>
            </div>
          </Col>

          <Col xs={0} sm={1} md={1} lg={1}>
            <Row middle="xs" end="xs">
              <Link to="/portfolio">
                <button id="portfolio-link" className="home-link">PORTFOLIO</button>
              </Link>
            </Row>
          </Col>
        </Row>

        {/* Bottom Shelf */}
        <Row className="bottom-shelf" center="xs" bottom="xs">
          <Col xs={12}>

            <div className="contact-link-container">
              <Link to="/contact">
                <button id="contact-link" className="home-link">CONTACT</button>
              </Link>
            </div>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
