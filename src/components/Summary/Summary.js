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
                                <Col>

                                </Col>
                                <Col>

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