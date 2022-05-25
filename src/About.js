import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MainCarousel from "./Carousel";
import { ReactComponent as Award } from "../src/assets/svg/award.svg";
import { ReactComponent as Shield } from "../src/assets/svg/shield.svg";
import { ReactComponent as Compass } from "../src/assets/svg/compass.svg";
import { ReactComponent as Heart } from "../src/assets/svg/heart.svg";
import Us from "./Us";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div id='about'>
        <MainCarousel />
        <br/>
        <br/>

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>About Travel</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Price Guarantee</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Best Travel Agent</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Travel Insurance</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
        <br/>
        <br/>
       <Us/>
       <br/>
       <br/>
       <Footer/>

      </div>
    );
  }
}

export default About;
