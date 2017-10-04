import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Section</h1>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default Contact;
