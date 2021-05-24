import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    modalClose = () =>{
        this.setState({show: false})
    }

    modalOpen = () =>{
        this.setState({show: true})
    }
    render() {
        return (
            <Fragment>
              <Container>
                  <Row>
                      <Col lg={12} sm={12} md={12} className="videoCard">
                         <div className="text-center">
                             <h5 className="videoTitles">How I Do</h5>
                             <p className="videoDesc">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                 demonstrate the visual form of a document or a typeface without relying on meaningful
                                 content. Lorem ipsum may be used as a placeholder before final copy is available.
                             </p>
                             <p> <FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /> </p>
                         </div>
                      </Col>
                  </Row>
              </Container>


                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;