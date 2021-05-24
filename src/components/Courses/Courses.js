import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
              <Container>
                  <Row>
                     <Col lg={6} sm={12} md={12}>
                        <Row>
                            <Col lg={6} sm={12} md={6}>

                            </Col>
                            <Col lg={6} sm={12} md={6}>

                            </Col>
                        </Row>
                     </Col>
                      <Col lg={6} sm={12} md={6}>
                          <Row>
                              <Col lg={6} sm={12} md={6}>

                              </Col>
                              <Col lg={6} sm={12} md={6}>

                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Container>
            </Fragment>
        );
    }
}

export default Courses;