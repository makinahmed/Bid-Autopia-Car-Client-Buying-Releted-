import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useProducts from '../Hooks/useProducts';

const ManageProducts = () => {

    const { loading, setLoading } = useAuth()
    const { products, setProducts, } = useProducts()
    const location = useLocation()
    const history = useHistory()
    // const uri_link = location?.pathname || '/'





    const handleClick = (id) => {
        setLoading(true)
        fetch(`http://localhost:5000/deleteProduct?id=${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                const updatedOrders = products.filter(product => product._id != id)
                setProducts(updatedOrders)
            })
            .finally(() => setLoading(false))
    }

    return (
        <>
            <h1 className="text-center text-success my-5">All Available Producs List</h1>
            {
                !loading ? <Container>
                    <Row >
                        {
                            products.map(product => <Col key={product._id} md={6} sm={12}>
                                <Card>
                                    <div style={{ height: '300px' }}>
                                        <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={product.imagelink} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {
                                                product.description.slice(0, 300)
                                            }
                                        </Card.Text>

                                    </Card.Body>

                                    <Button onClick={() => handleClick(product._id)} className="btn btn-success" variant="primary">Delete Products</Button>

                                </Card>
                            </Col>)
                        }
                    </Row>
                </Container> : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </>
    );
};

export default ManageProducts;