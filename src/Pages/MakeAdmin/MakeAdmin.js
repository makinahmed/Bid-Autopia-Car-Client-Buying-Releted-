import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdmin = { ...admin }
        newAdmin[field] = value;
        setAdmin(newAdmin)
      
    }
    const handleOnSubmit = e => {
        fetch(`https://rocky-mountain-28255.herokuapp.com/makeAdmin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
        e.preventDefault()
        e.target.reset()
    }
    return (
        <Container fluid>
            <Row  className="bg-info p-5" >
                <Col md={4} sm={12}></Col>
                <Col md={3} sm={12}>

                    <div style={{ textAlign: 'left', height: '650px' }}>
                        <form className="bg-white p-3 rounded m-auto" onSubmit={handleOnSubmit}>
                            <input className="w-100" placeholder="email" type="email" name="email" onBlur={handleOnBlur} /><br /><br />
                            <button className="btn btn-info w-100" type="submit">Make Admin</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;