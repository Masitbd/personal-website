import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-3">
                    <Row>
                        <Col lg={6} sm={12} md={12} >
                            <Row>
                                <Col lg={6} sm={12} md={6}>
                                    <img
                                        className="courseImage"
                                        src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_960_720.jpg"
                                    />
                                </Col>
                                <Col lg={6} sm={12} md={6}>
                                    <h5 className="courseTitle p-2">Web Development</h5>
                                    <p className="courseDesc">
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the visual
                                        form of a document or a typeface without relying on
                                        meaningful content.
                                        <br />
                                        <a className="courseDescLink" href="https">
                                            Details
                                        </a>
                                    </p>
                                </Col>
                                <Col lg={6} sm={12} md={6}>
                                    <img
                                        className="courseImage"
                                        src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_960_720.jpg"
                                    />
                                </Col>
                                <Col lg={6} sm={12} md={6}>
                                    <h5 className="courseTitle p-2">Web Development</h5>
                                    <p className="courseDesc">
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the visual
                                        form of a document or a typeface without relying on
                                        meaningful content.
                                        <br />
                                        <a className="courseDescLink" href="https">
                                            Details
                                        </a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} sm={12} md={12}>
                            <Row>
                                <Col lg={6} sm={12} md={6}>
                                    <img
                                        className="courseImage"
                                        src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_960_720.jpg"
                                    />
                                </Col>
                                <Col lg={6} sm={12} md={6}>
                                    <h5 className="courseTitle p-2">Web Development</h5>
                                    <p className="courseDesc">
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the visual
                                        form of a document or a typeface without relying on
                                        meaningful content.
                                        <br />
                                        <a className="courseDescLink" href="https">
                                            Details
                                        </a>
                                    </p>
                                </Col>
                                <Col lg={6} sm={12} md={6}>
                                    <img
                                        className="courseImage"
                                        src="https://cdn.pixabay.com/photo/2017/04/19/13/16/computer-2242264_960_720.jpg"
                                    />
                                </Col>
                                <Col lg={6} sm={12} md={6}>
                                    <h5 className="courseTitle p-2">Web Development</h5>
                                    <p className="courseDesc">
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the visual
                                        form of a document or a typeface without relying on
                                        meaningful content.
                                        <br />
                                        <a className="courseDescLink" href="https">
                                            Details
                                        </a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;