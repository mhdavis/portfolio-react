import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/tech" component={Tech}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Main;
