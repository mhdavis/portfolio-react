import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./About.css";
import { Row, Col } from 'react-flexbox-grid';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        {/* Main Page Row */}
        <Row middle="xs" className="about-content-row">

          {/* Main Page Column */}
          <Col className="about-panel-col" xs={12} smOffset={2} sm={10} mdOffset={2} md={10} lgOffset={4} lg={8}>
            {/* Panel Row */}
            <Row className="about-panel">

              {/* Panel Column */}
              <Col xs={11}>
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
                </div>
              </Col>
              {/* Panel Column */}

              {/* Button Column*/}
              <Col xs={1} className="about-route-col">
                <div className="about-route-container">
                  <Link to="/">
                    <button className="about-home-button">HOME</button>
                  </Link>
                </div>
              </Col>
              {/* Button Column*/}

            </Row>

          </Col>

        </Row>
        {/* Main Page Row */}
      </div>
    );
  }
}

export default About;
