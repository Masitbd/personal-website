import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg="6" md="6" md="12">
                            <h1 className="serviceName">Quick connect</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg="6" md="6" md="12">
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription">
                                Ørnebjergvej 12d 2tv,<br></br> 2600, Glostrup<br></br>
                                <FontAwesomeIcon icon={faEnvelope} />
                                sarker24@gmail.com<br></br>
                                <FontAwesomeIcon icon={faPhone} />
                                71728164
                            </p>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default ContactSection;