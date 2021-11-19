import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import AddProducts from '../../Home/Products/AddProducts/AddProducts';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import Pay from '../Pay/Pay';
import GiveReview from '../Reviews/GiveReviews';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { signOutUser, loading, isAdmin } = useAuth()


    return (
        <>
            <Container>
                <Row >
                    <Col md={2} sm={5} >

                        {/* Reviews */}
                        {!isAdmin ? <div
                            style={{ margin: '20px 0', color: 'black' }}
                        ><Link
                            style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}
                            to={`${url}`}
                        >Reviews</Link>
                        </div> : <div
                            style={{ margin: '20px 0', color: 'black' }}
                        ><Link
                            style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}
                            to={`${url}`}
                        >Add A Car</Link>
                        </div>}

                        {/* My Ordes */}

                        {
                            !isAdmin ? <div
                                style={{ margin: '20px 0', color: 'black' }}
                            ><Link style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }} to={`${url}/myorders`}
                            >My Orders</Link>
                            </div> :
                                <div
                                    style={{ margin: '20px 0', color: 'black' }}
                                ><Link style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }} to={`${url}/makeAdmin`}
                                >Make Admin</Link>
                                </div>
                        }

                        {/* payment */}
                        {
                            !isAdmin ? <div
                                style={{ margin: '20px 0', color: 'black' }}
                            ><Link style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}
                                to={`${url}/payment`}
                            >PayMent</Link>
                            </div> : <div
                                style={{ margin: '20px 0', color: 'black' }}
                            ><Link style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}
                                to={`${url}/manageProducts`}
                            >Mange Cars</Link>
                            </div>
                        }
                        {
                            isAdmin && <div
                                style={{ margin: '20px 0', color: 'black' }}
                            ><Link style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}
                                to={`${url}/manageAllOrders`}
                            >Manage All Orders</Link>
                            </div>
                        }


                        {/* log out  */}
                        <div
                            style={{ margin: '20px 0', color: 'black' }}
                        ><Link
                            to="/login"
                            className="fs-5"
                            style={{ cursor: 'pointer', color: 'black', textDecoration: 'none', fontSize: '20px' }}
                            onClick={signOutUser}
                        >Log Out</Link>
                        </div>
                    </Col>
                    {
                        !isAdmin ? <Col md={10} sm={7}>
                            <Switch>
                                <Route exact path={path}>
                                    <GiveReview></GiveReview>
                                </Route>
                                <Route path={`${path}/myorders`}>
                                    <MyOrders></MyOrders>
                                </Route>
                                <Route path={`${path}/payment`}>
                                    <Pay></Pay>
                                </Route>

                            </Switch>
                        </Col> :
                            <Col md={10} sm={7}>
                                <Switch>
                                    <Route exact path={path}>
                                        <AddProducts></AddProducts>
                                    </Route>
                                   
                                    <Route path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </Route>
                                    <Route path={`${path}/manageProducts`}>
                                        <ManageProducts></ManageProducts>
                                    </Route>
                                    <Route path={`${path}/manageAllOrders`}>
                                        <ManageAllOrders></ManageAllOrders>
                                    </Route>

                                </Switch>
                            </Col>
                    }
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;

/*
: <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
}*/