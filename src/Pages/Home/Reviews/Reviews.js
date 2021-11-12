import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../Hooks/useAuth';

var Rating = require('react-rating').default;
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {loading}= useAuth()
    useEffect(() => {
        fetch("https://rocky-mountain-28255.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
        {!loading ?
         <Container>
             <h1 className="text-success text-center my-5">What our Customer says!!</h1>
            <Row className="">
                {
                    reviews.map(review => <Col className="my-3 shadow bg-body rounded " key={review._id} md={4} sm={6}>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Body>
                                <Card.Title>{review?.fullName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    {`${review?.opinion.slice(0,100)}...`}
                                </Card.Text>
                                <Rating
                                    stop={review?.rating}
                                    
                                    emptySymbol={<FontAwesomeIcon style={{color:'gold'}} icon={faStar} />}
                                    fullSymbol={<FontAwesomeIcon style={{color: 'black'}} icon={faStar}/>}
                                />
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>: <Spinner style={{margin: '250px 500px'}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </>
    );
};

export default Reviews;