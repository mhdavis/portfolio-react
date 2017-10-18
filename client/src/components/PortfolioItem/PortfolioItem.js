import React from 'react';
import "./PortfolioItem.css";
import { Icon } from 'react-fa';

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item">
        <div className="portfolio-item-info">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>

        <div className="portfolio-item-btn-set">
        {props.repo ? (
            <a href={props.repo} target="_blank" rel="noopener noreferrer">
              <button className="portfolio-item-btn">
                <Icon name="github" size="3x" />
              </button>
            </a>
          ) : null }
        {props.host ? (
            <a href={props.host} target="_blank" rel="noopener noreferrer">
              <button className="portfolio-item-btn">
                <Icon name="desktop" size="3x" />
              </button>
            </a>
          ) : null }
        </div>
    </div>
  );
};

export default PortfolioItem;
