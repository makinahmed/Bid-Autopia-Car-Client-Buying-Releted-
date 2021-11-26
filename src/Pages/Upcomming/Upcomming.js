import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import upcoming1 from '../../images/upcoming-1.jpg'
import upcoming2 from '../../images/upcoming-2.jpg'
import upcoming3 from '../../images/upcoming-3.jpg'
import upcoming4 from '../../images/upcoming-4.jpg'
import upcoming5 from '../../images/upcoming-5.jpg'
import upcoming6 from '../../images/upcoming-6.jpg'
import 'aos/dist/aos.css';
const Upcomming = () => {

    useEffect(()=>{
        AOS.init({duration: 2000,
            dataAosEasing:"ease-out-cubic",
            dataAosAnchorPlacement:"center-center"});
    },[])
    return (
        <Container style={{ margin: '50px auto', textAlign: 'center' }}>
            <h1 className="my-5 text-center text-success">Upcoming Car Desings </h1>
            <Row>
                <Col md={4} sm={12}>
                    <img data-aos="fade-up" style={{ width: '100%' }} src={upcoming4} alt="" />
                </Col>

                <Col md={4} sm={12}>
                    <img data-aos="fade-down"  style={{ width: '100%' }} src={upcoming6} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img data-aos="fade-up" style={{ width: '100%' }} src={upcoming1} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img data-aos="fade-down" style={{ width: '100%' }} src={upcoming2} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img data-aos="fade-up" style={{ width: '100%' }} src={upcoming3} alt="" />
                </Col>
                <Col md={4} sm={12}>
                    <img data-aos="fade-down" style={{ width: '100%' }} src={upcoming5} alt="" />
                </Col>

            </Row>
        </Container>
    );
};

export default Upcomming;