import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/image13.jpg'
import img2 from '../../images/image14.jpg'
import img3 from '../../images/image12.jpg'

const FindUs = () => {
    return (
        <Container>
            <h1 className="my-5 text-center text-success">Find Us</h1>
            <Row>
                <Col md={4} sm={12}>
                    <img style={{width: '100%'}} src={img1} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img style={{width: '100%'}} src={img2} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img style={{width: '100%'}} src={img3} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default FindUs;