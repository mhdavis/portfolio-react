import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio Section</h1>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default Portfolio;
