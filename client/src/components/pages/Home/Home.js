import React from "react";
import { Spring, Transition } from "react-spring";
import { Link } from "react-router-dom";
import "./Home.css";
import { Row, Col } from "react-flexbox-grid";
import Navbar from "./../../Navbar/Navbar";
import history from "../../../history";

class Home extends React.Component {
  getPreviousRoute() {
    const index = history.entries.length - 2;
    if (history.entries[index] && history.entries[index].pathname) {
      return history.entries[index].pathname;
    }
    return "/home";
  }

  determineRouteAnimations(route) {
    const routeStyle = {
      from: { opacity: 1 },
      enter: { opacity: 1},
      leave: { opacity: 1 },
      config: { duration: 0 }
    };
    if (route === "/tech") {
      routeStyle.from = { transform: "translateY(-100vh)" };
      routeStyle.enter = { transform: "translateY(0vh)" };
      routeStyle.leave = { transform: "translateY(-100vh)" };
      routeStyle.config = { duration: 500 };
    }
    if (route === "/contact") {
      routeStyle.from = { transform: "translateY(100vh)" };
      routeStyle.enter = { transform: "translateY(0vh)" };
      routeStyle.leave = { transform: "translateY(100vh)" };
      routeStyle.config = { duration: 500 };
    }
    if (route === "/portfolio") {
      routeStyle.from = { transform: "translateX(100vh)" };
      routeStyle.enter = { transform: "translateX(0vh)" };
      routeStyle.leave = { transform: "translateX(100vh)" };
      routeStyle.config = { duration: 500 };
    }
    if (route === "/about") {
      routeStyle.from = { transform: "translateX(-100vh)" };
      routeStyle.enter = { transform: "translateX(0vh)" };
      routeStyle.leave = { transform: "translateX(-100vh)" };
      routeStyle.config = { duration: 500 };
    }
    // route is home
    return routeStyle;
  }

  render() {
    const previousRoute = this.getPreviousRoute();
    const routeStyle = this.determineRouteAnimations(previousRoute);

    return (
      <Transition
        items={this.props.location}
        from={routeStyle.from}
        enter={routeStyle.enter}
        leave={routeStyle.leave}
        config={routeStyle.config}
      >
        {location => props => (
          <div style={props} className="home-container">
            {/* Top Shelf */}
            <Row className="top-shelf" center="xs" top="xs">
              <Col xs={12}>
                <Navbar />

                <div className="tech-link-container">
                  <Link to="/tech">
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      delay={500}
                      config={{ duration: 800 }}
                    >
                      {props => (
                        <button
                          style={props}
                          id="tech-link"
                          className="home-link"
                        >
                          TECH
                        </button>
                      )}
                    </Spring>
                  </Link>
                </div>
              </Col>
            </Row>

            {/* Middle Shelf */}
            <Row className="middle-shelf" between="xs" middle="xs">
              <Col xs={0} sm={1} md={1} lg={1}>
                <Row middle="xs">
                  <Link to="/about">
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      delay={500}
                      config={{ duration: 800 }}
                    >
                      {props => (
                        <button
                          style={props}
                          id="about-link"
                          className="home-link"
                        >
                          ABOUT
                        </button>
                      )}
                    </Spring>
                  </Link>
                </Row>
              </Col>

              <Col xs={12} sm={10} md={10} lg={10}>
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ duration: 800 }}
                >
                  {props => (
                    <div style={props} className="logo-box">
                      <h1 className="primary-title">Michael H. Davis</h1>
                      <h2 className="secondary-title">Fullstack Developer</h2>
                    </div>
                  )}
                </Spring>
              </Col>

              <Col xs={0} sm={1} md={1} lg={1}>
                <Row middle="xs" end="xs">
                  <Link to="/portfolio">
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      delay={500}
                      config={{ duration: 800 }}
                    >
                      {props => (
                        <button
                          style={props}
                          id="portfolio-link"
                          className="home-link"
                        >
                          PORTFOLIO
                        </button>
                      )}
                    </Spring>
                  </Link>
                </Row>
              </Col>
            </Row>

            {/* Bottom Shelf */}
            <Row className="bottom-shelf" center="xs" bottom="xs">
              <Col xs={12}>
                <div className="contact-link-container">
                  <Link to="/contact">
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      delay={500}
                      config={{ duration: 800 }}
                    >
                      {props => (
                        <button
                          style={props}
                          id="contact-link"
                          className="home-link"
                        >
                          CONTACT
                        </button>
                      )}
                    </Spring>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Transition>
    );
  }
}

export default Home;
