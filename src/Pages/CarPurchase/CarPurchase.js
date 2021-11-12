import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const CarParchases = () => {
    const { id } = useParams();
    const [car, setCar] = useState()

    const [purchase, setPurchase] = useState()
    const { loading, user, setLoading, newUser } = useAuth()




    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/carPurchase/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
            .finally(() => setLoading(false))
    }, [user.email])

    const handleOnSubmit = e => {
        setLoading(true)
        fetch(`http://localhost:5000/soldedOut`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => console.log(""))
            .finally(() => setLoading(false))
        e.preventDefault()

    }

    // console.log(user);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPurchase = { ...purchase }
        newPurchase[field] = value;
        newPurchase.fullName = newUser?.fullName
        newPurchase.productName = car?.title
        newPurchase.address = newUser?.address
        newPurchase.address = newUser?.phone
        newPurchase.email = newUser?.email
        newPurchase.status = "pending"
        setPurchase(newPurchase)

    }
    return (
        <>{!loading ? <Container>

            <h1 className="text-success my-5 text-center">Congratulation!! Have a save Journey With <span className="text-primary">{car?.title}</span></h1>
            <Row>
                <Col lg={6} sm={12}>
                    <form onSubmit={handleOnSubmit}>
                        <input value={newUser?.fullName} placeholder="fullName" type="text" name="fullName"  /><br /><br />
                        <input placeholder="productName" value={car?.title} type="text" name="productName"  /><br /><br />
                        <input value={user.email} placeholder="email" type="email" name="email" /><br /><br />
                        <input placeholder="address" type="address" value={newUser?.address} name="address"  /><br /><br />
                        <input placeholder="phone" type="text" value={newUser?.phone} name="phone" /><br /><br />

                        <input onClick={handleOnBlur} value="CreditCard" type="radio" name="payment" id="creditCard" />
                        <label className="ms-3" htmlFor="creditCard">Credit Card</label>
                        <input className="ms-5" onClick={handleOnBlur} type="radio" value="PayPal" id="paypal" name="payment" />
                        <label className="ms-3" htmlFor="paypal">Paypal</label>
                        <br /><br />
                        <button className="btn btn-success" type="submit">Sent Request For Booking</button>
                    </form>
                </Col>
                <Col lg={6} sm={12}>
                    <Card>
                        <div style={{ height: '250px' }}>
                            <Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={car?.imagelink} />
                        </div>
                        <Card.Body>
                            <Card.Title>{car?.title}</Card.Title>
                            <Card.Text>
                                {
                                    car?.description.slice(0, 200)
                                }
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        }
        </>
    );
};

export default CarParchases;