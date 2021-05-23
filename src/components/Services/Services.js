import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import weblogo from "../../asset/image/web.svg";
import desktoplogo from "../../asset/image/desktop.svg";
import testinglogo from "../../asset/image/testing.svg";

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceNameTitles text-center">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={weblogo} />
                            <h2 className="serviceName">Web Development</h2>
                            <p className="serviceDescription">Design and develop static and dynamic websites as per clients requirement</p>
                        </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                            <img src={desktoplogo} />
                                <h2 className="serviceName">Desktop Development</h2>
                                <p className="serviceDescription">Design and develop desktop application based on clients requirement</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                            <img src={testinglogo} />
                                <h2 className="serviceName">Software Testing</h2>
                                <p className="serviceDescription">Several years experience of software testing</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;