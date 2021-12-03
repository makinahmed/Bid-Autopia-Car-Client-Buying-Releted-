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
                    <Navbar.Brand href="/"><span>BID AUTOPIA</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {!isAdmin && <>
                                <Nav.Link as={Link} to="/home"><span className="text-color">HOME</span></Nav.Link>
                                <Nav.Link className="text-color" as={Link} to="/explore">EXPLORE</Nav.Link>


                            </>}
                            {
                                user?.email && <Nav.Link as={Link} to="/dashboard" style={navTestColor}>DASHBOARD</Nav.Link>

                            }
                            {
                                user?.email ? <>

                                    <Nav.Link as={Link} to="/login"><button
                                        className="btn"
                                        style={{ outline: 'none', border: 'none', padding: '0', backgroundColor: '#198754' }}
                                        onClick={signOutUser}>LOG OUT</button ></Nav.Link>

                                </> : <Nav.Link as={Link} to="/login">LOG IN</Nav.Link>
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


