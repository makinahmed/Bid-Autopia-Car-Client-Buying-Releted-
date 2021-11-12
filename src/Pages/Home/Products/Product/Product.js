import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { imagelink, description, title ,_id} = props.product;
    return (
        <Col md={4} sm={6} className="my-2">
            <Card>
                <div style={{height: '250px'}}>
                    <Card.Img style={{width:'100%',height: '100%'}} variant="top" src={imagelink} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            description.slice(0,200)
                        }
                    </Card.Text>

                </Card.Body>
                <Link to={`/carPurchase/${_id}`}>
                <Button className="btn btn-success w-100" variant="primary">Purchase</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Product;