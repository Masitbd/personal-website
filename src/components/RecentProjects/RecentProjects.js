import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class RecentProjects extends Component {
  render() {
    return (
      <fragment>
        <Container>
          <h1 className="serviceNameTitles text-center">Recent Projects</h1>
          <Row>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="projectCard">
                <Card.Img
                  className="projectCardImage"
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2018/04/19/20/44/systems-icons-3334262_960_720.jpg"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Personal Website
                  </Card.Title>
                  <Card.Text className="projectCardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="projectCard">
                <Card.Img
                  className="projectCardImage"
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    Restaurant Billing system
                  </Card.Title>
                  <Card.Text className="projectCardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="projectCard">
                <Card.Img
                  className="projectCardImage"
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2016/05/21/21/52/house-1407562_960_720.jpg"
                />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    House Rent Management System
                  </Card.Title>
                  <Card.Text className="projectCardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
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
