import React from "react";
import { Transition } from "react-spring";
import { Link } from "react-router-dom";
import "./About.css";
import { Row, Col } from "react-flexbox-grid";
import about from "./about.json";

const About = ({ location }) => (
  <Transition
    items={location}
    from={{ transform: "translateX(100vh)", transitionTimingFunction: "ease-in" }}
    enter={{ transform: "translateX(0vh)", transitionTimingFunction: "ease-in" }}
    leave={{ transform: "translateX(100vh)", transitionTimingFunction: "ease-in" }}
    config={{ duration: 500 }}
  >
    {location => props => (
      <div className="about-container">
        {/* Main Page Row */}
        <Row style={props} middle="xs" className="about-content-row">
          {/* Main Page Column */}
          <Col
            className="about-panel-col"
            xs={12}
            smOffset={2}
            sm={10}
            mdOffset={2}
            md={10}
            lgOffset={4}
            lg={8}
          >
            {/* Panel Row */}
            <Row className="about-panel">
              {/* Panel Column */}
              <Col xs={11}>
                <div className="about-content">
                  <h1>About</h1>
                  <hr />
                  <div className="about-information">
                    <div className="about-picture" />
                    <p>{about.overview}</p>
                    <p>{about.interests}</p>
                  </div>
                </div>
              </Col>
              {/* Panel Column */}

              {/* Button Column*/}
              <Col xs={1} className="about-route-col">
                <div className="about-route-container">
                  <Link to="/">
                    <button className="about-home-button">HOME</button>
                  </Link>
                </div>
              </Col>
              {/* Button Column*/}
            </Row>
          </Col>
        </Row>
        {/* Main Page Row */}
      </div>
    )}
  </Transition>
);

export default About;
