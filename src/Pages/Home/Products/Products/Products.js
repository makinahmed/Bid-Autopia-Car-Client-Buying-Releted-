import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const { products, loading } = useProducts()
    return (
        <>
            {!loading ? <Container>
                <h1 className="my-5 text-center text-success">Our Latest Cars</h1>
                <Row >
                    {
                        products?.slice(0, 6).map(product => <Product

                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container> : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </>
    );
};

export default Products;