import React from "react";
import { Transition } from "react-spring";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import { Row, Col } from "react-flexbox-grid";
import PortfolioItem from "./../../PortfolioItem/PortfolioItem";
import items from "./portfolio.json";

const Portfolio = ({ location }) => (
  <Transition
    items={location}
    from={{ transform: "translateX(-100vh)" }}
    enter={{ transform: "translateX(0vh)" }}
    leave={{ transform: "translateX(-100vh)" }}
    config={{ duration: 500 }}
  >
    {location => props => (
      <div className="portfolio-container">
        {/* Main Page Row */}
        <Row style={props} middle="xs" className="portfolio-content-row">
          {/* Main Page Column */}
          <Col className="about-panel-col" xs={12} sm={10} md={10} lg={8}>
            {/* Panel Row */}
            <Row className="portfolio-panel">
              {/* Button Column*/}
              <Col xs={1} className="portfolio-route-col">
                <div className="portfolio-route-container">
                  <Link to="/">
                    <button className="portfolio-home-button">HOME</button>
                  </Link>
                </div>
              </Col>
              {/* Button Column*/}

              {/* Panel Column */}
              <Col xs={11}>
                <div className="portfolio-information">
                  <h1>Portfolio</h1>
                  <hr />

                  <div className="portfolio-items-box">
                    {items.map(item => {
                      return (
                        <PortfolioItem
                          key={item.name}
                          name={item.name}
                          description={item.description}
                          repo={item.repo}
                          host={item.host}
                        />
                      );
                    })}
                  </div>
                </div>
              </Col>
              {/* Panel Column */}
            </Row>
          </Col>
        </Row>
        {/* Main Page Row */}
      </div>
    )}
  </Transition>
);

export default Portfolio;
