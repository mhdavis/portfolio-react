import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import About from '../About/About';
import Tech from '../Tech/Tech';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

class Home extends Component {
  render() {
    return (
      <Router>
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

          <Route path="/about" component={About} />
          <Route path="/tech" component={Tech} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default Home;
