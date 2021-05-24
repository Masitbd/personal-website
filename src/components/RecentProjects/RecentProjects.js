import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class RecentProjects extends Component {
    render() {
        return (
            <fragment>
                <Container>
                    <h1 className="serviceNameTitles text-center">Recent Projects</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/04/19/20/44/systems-icons-3334262_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/04/19/20/44/systems-icons-3334262_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/04/19/20/44/systems-icons-3334262_960_720.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </fragment>
        );
    }
}

export default RecentProjects;