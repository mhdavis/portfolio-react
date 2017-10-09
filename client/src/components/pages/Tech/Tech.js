import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Tech.css';
import { Row, Col } from 'react-flexbox-grid';
import TechItem from "./../../TechItem/TechItem";

class Tech extends Component {
  render() {
    return (
      <div className="tech-container">
        <Row>
          <Col xs={12}>

            <Row center="xs">
              <Col xs={12} sm={12} md={10} lg={10}>
                 {/* Tech Section Header */}
                 <div className="tech-section-header">
                  <h1 className="tech-primary-title">Technologies</h1>
                 </div>
                 {/* Tech Section Header */}

                 {/* Tech Section Body */}
                 <Row className="tech-section-body">
                   <Col xs={12} className="tech-panel">

                     <Row center="xs">
                       <Col xs={12}>

                         <h2 className="tech-line">I have worked with...</h2>

                         <div className="tech-items-box">
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                           <TechItem />
                         </div>

                         <div className="tech-section-footer">
                           <Link to="/">
                             <button className="tech-home-button">HOME</button>
                           </Link>
                         </div>

                       </Col>
                     </Row>

                   </Col>
                 </Row>
                 {/* Tech Section Body */}

               </Col>
            </Row>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Tech;
