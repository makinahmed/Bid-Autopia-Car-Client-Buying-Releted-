import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useProducts from '../Hooks/useProducts';
import 'aos/dist/aos.css';
const ManageProducts = () => {

    
    const { products, setProducts,loading ,setLoading} = useProducts()
    const location = useLocation()
    const history = useHistory()
    
    const handleClick = (id) => {
        setLoading(true)
        fetch(`https://rocky-mountain-28255.herokuapp.com/deleteProduct?id=${id}`, {
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            dataAosEasing: "ease-out-cubic",
            dataAosAnchorPlacement: "center-center"

        });
    }, [])

    return (
        <>
            <h1 className="text-center text-success my-5">All Available Products List</h1>
            {
                !loading ? <Container>
                    <Row >
                        {
                            products.map(product => <Col key={product._id} md={6} sm={12} className="my-3">
                                <Card className="shadow-sm p-3 mb-5 bg-body rounded" data-aos={`zoom-in`}>
                                    <div style={{ height: '300px' }}>
                                        <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={product.imagelink} />
                                    </div>
                                    <Card.Body>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Title>${product.price}</Card.Title>
                                        </div>
                                        <Card.Text style={{height: '120px'}}>
                                            {
                                                product.description.slice(0, 300)
                                            }
                                        </Card.Text>

                                    </Card.Body>

                                    <Button onClick={() => handleClick(product._id)} className="btn btn-success" variant="primary">Delete Car</Button>

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