import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {

    const { user, signOutUser, isAdmin } = useAuth()
    return (
        <>
            <Navbar bg="success" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Bid Autopia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {isAdmin && user?.email ? <>
                                <Nav.Link as={Link} to="/makeAdmin">Make Admin</Nav.Link>
                                <Nav.Link as={Link} to="/addProducts">Add Cars</Nav.Link>
                                <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>
                                <Nav.Link as={Link} to="/manageProducts">Manage Cars</Nav.Link>
                            </>: ''}
                            {!isAdmin && <>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                              
                              
                            </>}
                            {
                                user?.email && !isAdmin ?   <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>: ''
                            }
                            {
                                user?.email ? <>
                               
                                <Nav.Link as={Link} to="/login"><button
                                    className="btn"
                                    style={{ outline: 'none', border: 'none', padding: '0', backgroundColor: '#198754' }}
                                    onClick={signOutUser}>Log Out</button ></Nav.Link> 
                                       
                                </> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;