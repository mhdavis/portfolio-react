import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Portfolio.css";
import PortfolioItem from "./../../PortfolioItem/PortfolioItem";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-panel">

          <div className="portfolio-button-div">
            <Link to="/">
              <button className="portfolio-home-button">HOME</button>
            </Link>
          </div>

          <div className="portfolio-information">
            <h1>Portfolio</h1>
            <hr/>

            <div className="portfolio-items-box">
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />

              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />

              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />

              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />

              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </div>

          </div> {/*end about information*/}

        </div> {/* end about panel */}

        <div className="portfolio-img"></div>
      </div>
    );
  }
}

export default Portfolio;
