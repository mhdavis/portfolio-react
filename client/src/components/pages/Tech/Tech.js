import React from "react";
import { Transition } from "react-spring";
import { Link } from "react-router-dom";
import "./Tech.css";
import { Row, Col } from "react-flexbox-grid";
import Icon from "./../../Icon/Icon";

const Tech = ({ location }) => (
  <Transition
    items={location}
    from={{ transform: "translateY(100vh)", transitionTimingFunction: "ease" }}
    enter={{ transform: "translateY(0vh)", transitionTimingFunction: "ease" }}
    leave={{ transform: "translateY(100vh)", transitionTimingFunction: "ease" }}
    config={{ duration: 500 }}
  >
    {location => props => (
      <div className="tech-container">
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col className="tech-panel-col" xs={12} sm={12} md={10} lg={10}>
                {/* Tech Section Header */}
                <div className="tech-section-header">
                  <h1 className="tech-primary-title">Technologies</h1>
                </div>
                {/* Tech Section Header */}

                {/* Tech Section Body */}
                <Row style={props} className="tech-section-body">
                  <Col xs={12} className="tech-panel">
                    <Row center="xs">
                      <Col xs={12}>
                        <h2 className="tech-line">I have worked with...</h2>

                        <div className="tech-items-box">
                          <Icon name="javascript" />
                          <Icon name="react" />
                          <Icon name="express" />
                          <Icon name="nodejs" />
                          <Icon name="mongodb" />
                          <Icon name="mysql" />
                          <Icon name="atom" />
                          <Icon name="bootstrap" />
                          <Icon name="chrome" />
                          <Icon name="ie10" />
                          <Icon name="firefox" />
                          <Icon name="html5" />
                          <Icon name="css3" />
                          <Icon name="jquery" />
                          <Icon name="handlebars" />
                          <Icon name="devicon" />
                          <Icon name="git" />
                          <Icon name="yarn" />
                          <Icon name="heroku" />
                          <Icon name="mocha" />
                          <Icon name="npm" />
                          <Icon name="sequelize" />
                          <Icon name="slack" />
                          <Icon name="webpack" />
                        </div>

                        <div className="tech-section-footer">
                          <Link to="/">
                            <button className="tech-home-button">HOME</button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* Tech Section Body */}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )}
  </Transition>
);

export default Tech;
