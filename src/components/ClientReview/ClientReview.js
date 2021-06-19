import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoPlaySpeed: 3000,
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
              <container className="text-center">
                <h1 className="serviceNameTitles">Client Says</h1>
                  <Slider {...settings}>
                      <div>
                          <Row className=" justify-content-center">
                             <Col lg="6" md="6" sm="12">
                                 <img className="circleImage" src="	https://cdn.pixabay.com/photo/2015/07/09/23/09/cadaques-838724_960_720.jpg" />
                                 <h1 className="serviceName">Web Development</h1>
                                 <p className="serviceDescription">If you’ve ever tried to design a website or start your own blog,
                                     you’ve probably felt the need to add images to your creation.

                                 </p>
                             </Col>
                          </Row>
                      </div>
                      <div>
                          <Row className=" justify-content-center">
                              <Col lg="6" md="6" sm="12">
                                  <img className="circleImage" src="https://media.istockphoto.com/photos/fuji-mountain…th-morning-mist-in-picture-id1192780580?s=612x612" />
                                  <h1 className="serviceName">Web Development</h1>
                                  <p className="serviceDescription">If you’ve ever tried to design a website or start your own blog,
                                      you’ve probably felt the need to add images to your creation.

                                  </p>
                              </Col>
                          </Row>
                      </div>
                      <div>
                          <Row className=" justify-content-center">
                              <Col lg="6" md="6" sm="12">
                                  <img className="circleImage" src="https://cdn.pixabay.com/photo/2016/11/07/14/03/japan-1805865_960_720.jpg" />
                                  <h1 className="serviceName">Web Development</h1>
                                  <p className="serviceDescription">If you’ve ever tried to design a website or start your own blog,
                                      you’ve probably felt the need to add images to your creation.

                                  </p>
                              </Col>
                          </Row>
                      </div>
                  </Slider>
              </container>
            </Fragment>
        );
    }
}

export default ClientReview;