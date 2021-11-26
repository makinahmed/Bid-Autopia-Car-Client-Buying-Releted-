import Button from '@restart/ui/esm/Button';
import AOS from 'aos';
import React, { useEffect } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import 'aos/dist/aos.css';
const Explore = () => {
    const { products, loading } = useProducts()
    useEffect(() => {
        AOS.init({
            duration: 1000,
            dataAosEasing: "ease-out-cubic",
            dataAosAnchorPlacement: "center-center"

        });
    }, [])
    
    return (
        <>
            {!loading ? <Container>
                <h1 className="my-5 text-center text-success">Our Collections</h1>
                <Row >
                    {
                        products.map(product => <Col className="my-5" md={6} sm={12}>
                            <Card className="shadow-sm p-3 mb-5 bg-body rounded" data-aos={`zoom-in`}>
                                <div style={{ height: '300px' }}>
                                    <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={product.imagelink} />
                                </div>
                                <Card.Body>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Title>${product.price}</Card.Title>
                                    </div>
                                    <Card.Text style={{ height: '130px' }}>
                                        {
                                            product.description.slice(0, 300)
                                        }
                                    </Card.Text>

                                </Card.Body>
                                <Link to={`/explore/${product._id}`}>
                                    <Button className="w-100 btn btn-success" variant="primary">Purchase</Button>
                                </Link>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
                : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
        </>
    );
};

export default Explore;