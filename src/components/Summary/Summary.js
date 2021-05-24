import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row, Card} from "react-bootstrap";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner summarySection p-0">
                    <div className="summaryBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12} >
                                  <Row className="countSections">
                                      <Col className="text-center">
                                         <h1 className="countNumber ">100</h1>
                                          <h4 className="countTitles">Total Projects</h4>
                                          <hr className="bg-white w-25" />
                                      </Col>
                                      <Col className="text-center">
                                          <h1 className="countNumber">100</h1>
                                          <h4 className="countTitles">Total Clients</h4>
                                          <hr className="bg-white w-25" />
                                      </Col>
                                  </Row>
                                </Col>
                                <Col lg={4} md={6} md={12}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How I Work</Card.Title>
                                            <Card.Text>
                                               <p className="cardSubTitle">Requirement Analysis</p>
                                                <p className="cardSubTitle">System Analysis</p>
                                                <p className="cardSubTitle">Software Testing</p>
                                                <p className="cardSubTitle">Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
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