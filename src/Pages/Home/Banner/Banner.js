import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCoffee, faDollarSign, faHeadphones, faLaptop } from '@fortawesome/free-solid-svg-icons'
import bannerImg from '../../../images/image4.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const bannerImage = {
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '100vh'

    }
    return (
        <Container fluid>
            <Row >
                <Col sm={12} md={12} className="text-left" style={bannerImage}>
                    <div className="ms-5 mt-5 text-white">
                        <h1>Upto 25% off on first booking <span className="text-danger">Car</span></h1>
                        <h1> through your app!</h1>
                        <br />
                        <p className="fs-4"><FontAwesomeIcon style={{ color: 'red' }} icon={faDollarSign} /> Best Price Guaranteed</p>
                        <p className="fs-4"><FontAwesomeIcon style={{ color: 'red' }} icon={faCar} />  Home Pickups</p>
                        <p className="fs-4"><FontAwesomeIcon style={{ color: 'red' }} icon={faLaptop} />  Easy Bookings</p>
                        <p className="fs-4"><FontAwesomeIcon style={{ color: 'red' }} icon={faHeadphones} />  24/7 Customer Care</p>
                        <br />
                       <Link to="/explore"> <button className="fs-4 btn bg-white">Explore</button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
