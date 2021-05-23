import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceNameTitles">Technology Used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                         <h1> This is col 1</h1>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                           <p className="text-justify des">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                               to demonstrate the visual form of a document or a typeface without relying on meaningful
                               content. Lorem ipsum may be used as a placeholder before final copy is available.
                           </p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Analysis;