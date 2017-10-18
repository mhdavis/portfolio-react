import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Portfolio.css";
import { Row, Col } from 'react-flexbox-grid';
import PortfolioItem from "./../../PortfolioItem/PortfolioItem";
import items from "./portfolio.json";

class Portfolio extends Component {
  state = {
    items
  };

  render() {
    return (
      <div className="portfolio-container">
        {/* Main Page Row */}
        <Row middle="xs" className="portfolio-content-row">

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
                  <hr/>

                  <div className="portfolio-items-box">
                    {
                      this.state.items.map(item => {
                        return <PortfolioItem
                         key={item.name}
                         name={item.name}
                         description={item.description}
                         repo={item.repo}
                         host={item.host}
                        />
                      })
                    }
                  </div>
                </div>
              </Col>
              {/* Panel Column */}

            </Row>

          </Col>

        </Row>
        {/* Main Page Row */}
      </div>
    );
  }
}

export default Portfolio;
