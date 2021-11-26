import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/image13.jpg'
import img2 from '../../images/image14.jpg'
import img3 from '../../images/image12.jpg'
import 'aos/dist/aos.css';

const FindUs = () => {
    useEffect(()=>{
        AOS.init({duration: 2000,dataAosEasing:"ease-out-cubic"});
    },[])
    return (
        <Container>
            <h1 className="my-5 text-center text-success">Find Us</h1>
            <Row>
                <Col md={4} sm={12}>
                    <img data-aos="flip-left" style={{width: '100%'}} src={img1} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img data-aos="flip-right" style={{width: '100%'}} src={img2} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img data-aos="flip-left" style={{width: '100%'}} src={img3} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default FindUs;