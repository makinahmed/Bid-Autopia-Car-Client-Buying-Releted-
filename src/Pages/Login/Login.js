import React, { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import LoginImage from '../../images/login.png'
const Login = () => {
    const [loginUser, setLoginUser] = useState()
    const location = useLocation()
    const history = useHistory()
    const { signInUser, loading } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...loginUser }
        newLoginUser[field] = value;
        setLoginUser(newLoginUser)
    }
    const handleOnClick = () => {

        signInUser(loginUser.email, loginUser.password, location, history)

    }




    return (
        <Container fluid>
            <Row className=" p-5 mx-auto">
           
                <Col md={4} sm={12} className="ms-5" style={{textAlign:'left'}}>
                    {!loading ? <div >
                        <form className="bg-white p-3 rounded m-auto">
                            <h2 className="mt-3 mb-5 text-center">Login Form</h2>
                            <input className="w-100" placeholder="email" type="email" name="email" onBlur={handleOnBlur} /><br /><br />
                            <input className="w-100" placeholder="password" type="password" name="password" onBlur={handleOnBlur} /><br /><br />
                            <span>Do not have an account?</span><Link to="/registration">Register</Link>
                            <br /><br />
                            <button className="btn btn-info w-100" onClick={handleOnClick} type="submit">Sign In</button>


                        </form>

                    </div> : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </Col>
                <Col md={4} className="me-1"  sm={12} style={{textAlign: 'right'}}>
                    <img style={{width: '120%'}} src={LoginImage} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;