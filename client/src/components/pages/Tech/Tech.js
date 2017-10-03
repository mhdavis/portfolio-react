import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';

class Tech extends Component {
  render() {
    return (
      <Router>
        <div>
            <h1>Technologies Section</h1>

            <Link to="/">
              <button>Home</button>
            </Link>

            <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default Tech;
