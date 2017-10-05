import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-img"></div>

        <div className="about-panel">

          <div className="about-information">
            <h1>About</h1>
            <hr/>
            <p>
              Est qui natus et magnam dicta. Animi nesciunt odio omnis quam magnam laudantium. Temporibus sapiente in doloribus. Est libero rerum est culpa doloremque molestias vero. Perferendis nam repellendus et. Est qui numquam atque qui aperiam perferendis libero.
              Est qui natus et magnam dicta.
              <br/>
              <br/>
              Animi nesciunt odio omnis quam magnam laudantium. Temporibus sapiente in doloribus. Est libero rerum est culpa doloremque molestias vero. Perferendis nam repellendus et. Est qui numquam atque qui aperiam perferendis libero.
            </p>
          </div> {/*end about information*/}

          <div className="button-div">
            <Link to="/">
              <button className="home-button">HOME</button>
            </Link>
          </div>

        </div> {/* end about panel */}
      </div>
    );
  }
}

export default About;
