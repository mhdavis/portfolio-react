import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Tech extends Component {
  render() {
    return (
      <div>
        <h1>Technologies Section</h1>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default Tech;
