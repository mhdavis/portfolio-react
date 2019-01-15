import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Tech from "./components/pages/Tech/Tech";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/tech" component={Tech} />
  </Switch>
);

export default App;
