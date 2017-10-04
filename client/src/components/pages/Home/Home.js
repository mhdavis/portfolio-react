import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Section</h1>

        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/tech">
          <button>Tech</button>
        </Link>
        <Link to="/portfolio">
          <button>Portfolio</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    );
  }
}

export default Home;
