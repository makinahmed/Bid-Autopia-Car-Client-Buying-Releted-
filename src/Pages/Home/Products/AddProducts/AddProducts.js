import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AddProducts = () => {
    const [product, setProduct] = useState()
    const handleOnSubmit = e => {
        fetch(`https://rocky-mountain-28255.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        e.preventDefault()
        e.target.reset()
    }
    const handleOnBlur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product }
        newProduct[filed] = value;
        setProduct(newProduct)
    }
    return (
        <>
            <Container fluid>
                <Row className="bg-info p-5">

                    <Col md={4} sm={12}></Col>
                    <Col md={3} sm={12}>


                        <div  style={{ textAlign: 'left', height: '650px' }}>
                            <form onSubmit={handleOnSubmit} className="bg-white p-3 rounded m-auto">
                                <input className="w-100" onBlur={handleOnBlur} type="text" id="title1" name="title" placeholder="title" />   <br /><br />
                                <input className="w-100" onBlur={handleOnBlur} type="text" id="Description1" name="description" placeholder="description" />   <br /><br />
                                <input className="w-100" onBlur={handleOnBlur} type="text"  name="price" placeholder="price" />   <br /><br />
                                <input className="w-100" onBlur={handleOnBlur} type="text" id="imagelink1" name="imagelink" placeholder="image link" />   <br /><br />
                                <button className="btn btn-info w-100" type="submit">Add Product</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddProducts;

