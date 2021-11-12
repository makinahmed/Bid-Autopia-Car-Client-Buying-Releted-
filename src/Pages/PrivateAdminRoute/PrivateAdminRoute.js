import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateAdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, loading } = useAuth()
    // console.log(isAdmin, '   from private route');
    loading && <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>

    return (
        <Route
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
        />
    );
};

export default PrivateAdminRoute;