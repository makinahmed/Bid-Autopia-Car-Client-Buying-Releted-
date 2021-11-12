import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateAdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, loading } = useAuth()
    return (
        <>
            {
                isAdmin && user?.email ? <Route
                    {...rest}
                    render={({ location }) =>
                        user?.email && isAdmin ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: location }
                                }}
                            />
                        )
                    }
                /> : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </>
    );
};

export default PrivateAdminRoute;