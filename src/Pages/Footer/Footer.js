import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/gAndApple.png'
import facebook from '../../images/facebook.png'
import insta from '../../images/insta.png'
import twitter from '../../images/tw.png'

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <h1 className="text-center mb-5">More Explore Us</h1>
            <Row>
                <Col md={3} sm={12}>
                    <h3>EXPLORE PROPERTIES</h3>
                    <p>Fandom</p>
                    <p>Gamepedia</p>
                    <p>D&D Beyond</p>
                    <p>Cortex RPG</p>
                    <p>Muthead</p>
                    <p>Futhead</p>
                </Col>
                <Col md={3} sm={12}>
                    <h3>OVERVIEW</h3>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Contact</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Global Sitemap</p>
                    <p>Local Sitemap</p>
                </Col>
                <Col md={3} sm={12}>
                    <h3>COMMUNITy</h3>
                    <p>Community Central</p>
                    <p>Support</p>
                    <p>Help</p>
                    <p>Do NOt Sell My Info</p>
                    <h3>ADVERTISE</h3>
                    <p>Media Kit</p>
                    <p>Contact</p>
                </Col>
                <Col md={3} sm={12}>
                    <h3>FANDOM APPS</h3>
                    <p>Take your favorite car from our Apps</p>
                    <div><img style={{ width: '20%', backgroundColor: 'white' }} src={img1} alt="" /></div>
                    <span><img style={{ width: '10%', margin: '8px' }} src={facebook} alt="" /></span>
                    <span><img style={{ width: '10%', margin: '8px' }} src={insta} alt="" /></span>
                    <span><img style={{ width: '10%', margin: '8px' }} src={twitter} alt="" /></span>
                </Col>
            </Row>

        </Container>
    );
};

export default Footer;