import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth()
    loading && <Spinner style={{ margin: '250px 500px' }} animation="border" role="status"> <span className="visually-hidden">Loading...</span>
    </Spinner>
    return (
        <>
            <Route

                {...rest}
                render={({ location }) =>
                    user?.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />

        </>
    );
};

export default PrivateRoute;