import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center  footerSection">
          <Row>
            <Col lg={3} md="6" sm="12" className="p-5 text-justify">
              <h1 className="serviceName">Follow me</h1>
              <a className="socialLink" href="#">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </a>
              <br></br>
              <a className="socialLink" href="#">
                <FontAwesomeIcon icon={faYoutube} />
                YouTube
              </a>
            </Col>
            <Col lg={3} md="6" sm="12" className="p-5 text-justify">
              <h1 className="serviceName">Address</h1>
              <p className="serviceDescription">
                Ørnebjergvej 12d 2tv,<br></br> 2600, Glostrup<br></br>
                <FontAwesomeIcon icon={faEnvelope} />
                sarker24@gmail.com<br></br>
                <FontAwesomeIcon icon={faPhone} />
                71728164
              </p>
            </Col>
            <Col lg={3} md="6" sm="12" className="p-5 text-justify">
              <h1 className="serviceName">Information</h1>
              <a className="footerLink" href="#">
                About Me
              </a>
              <br></br>
              <a className="footerLink" href="#">
                My Resume
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Contact Me
              </a>
            </Col>
            <Col lg={3} md="6" sm="12" className="p-5 text-justify">
              <h1 className="serviceName">Legal</h1>
              <a className="footerLink" href="#">
                Refund Policy
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Terms and condition
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Privacy policy
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <div className="copyrightSection">
            <a className="copyrightText" href="#">
              sarker24com &copy; 2020-2021
            </a>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
