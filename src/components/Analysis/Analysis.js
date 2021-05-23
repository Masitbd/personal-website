import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, XAxis, Tooltip} from "recharts";

class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            data:[
                {Technology: 'Ruby', project: 100},
                {Technology: 'React', project: 80},
                {Technology: 'java', project: 60},
                {Technology: 'c#', project: 70},
                {Technology: 'SQL', project: 100},
                {Technology: 'Testing', project: 80},
                {Technology: 'support', project: 100}
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceNameTitles">Technology Used</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="project" fill="#338DFF" />
                                </BarChart>
                            </ResponsiveContainer>

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