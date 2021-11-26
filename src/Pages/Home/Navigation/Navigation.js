import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {

    const { user, signOutUser, isAdmin } = useAuth()

    const navbarStyle = {
        backgroundColor: 'black',
    }
    const navTestColor = {
        color: 'white',
    }

    return (
        <>
            <Navbar style={navbarStyle} variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="/">Bid Autopia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {!isAdmin && <>
                                <Nav.Link as={Link} to="/home"><span className="text-color">Home</span></Nav.Link>
                                <Nav.Link className="text-color" as={Link} to="/explore">Explore</Nav.Link>


                            </>}
                            {
                                user?.email && <Nav.Link as={Link} to="/dashboard" style={navTestColor}>DashBoard</Nav.Link>

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



/*

 {/*


*/


