import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner summarySection p-0">
                    <div className="summaryBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12} >
                                  <Row>
                                      <Col className="text-center">
                                         <h1>100</h1>
                                          <h4>Total Projects</h4>
                                          <hr className="bg-white w-25" />
                                      </Col>
                                      <Col className="text-center">
                                          <h1>100</h1>
                                          <h4>Total Projects</h4>
                                          <hr className="bg-white w-25" />
                                      </Col>
                                  </Row>
                                </Col>
                                <Col lg={4} md={6} md={12}>

                                </Col>
                                <Col>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;