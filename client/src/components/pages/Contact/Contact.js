import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Contact.css";
import { Row, Col } from 'react-flexbox-grid';
import SocialButton from "./../../SocialButton/SocialButton";
import EmailForm from "./../../EmailForm/EmailForm";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <Row>
          <Col xs={12}>

            <Row center="xs">
              <Col xs={12} sm={12} md={10} lg={10}>

                <div className="contact-panel">

                  {/* Home Button */}
                  <Link to="/">
                    <button className="contact-home-button">HOME</button>
                  </Link>
                  {/* Home Button */}

                  {/* Content Row */}
                  <Row center="xs">
                    <Col xs={6}>
                      <div className="contact-content-container">
                        <h1 className="contact-primary-title">Contact</h1>
                        <div className="contact-media-buttons">
                          <SocialButton iconName={"github"} size={"3x"} link={"https://github.com/mhdavis"} />
                          <SocialButton iconName={"linkedin"} size={"3x"} link={"https://www.linkedin.com/in/m-h-davis/"} />
                          <SocialButton iconName={"twitter"} size={"3x"} link={"https://twitter.com/M_HDavis"} />
                        </div>
                        <div className="contact-form-container">
                          <EmailForm />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  {/* Content Row */}

                </div>

              </Col>
            </Row>

          </Col>
        </Row>

      </div>
    );
  }
}

export default Contact;
