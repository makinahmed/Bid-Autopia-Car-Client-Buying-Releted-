import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { imagelink, description, price, title, _id } = props.product;
    return (
        <Col md={4} sm={6} className="my-2">
            <Card className="shadow-sm p-3 mb-5 bg-body rounded">
                <div style={{ height: '250px' }}>
                    <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={imagelink} />
                </div>
                <Card.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Card.Title >{title}</Card.Title>
                        <Card.Title >${price}</Card.Title>
                    </div>
                    <Card.Text style={{height: '130px'}}>
                        {
                            description.slice(0, 200)
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