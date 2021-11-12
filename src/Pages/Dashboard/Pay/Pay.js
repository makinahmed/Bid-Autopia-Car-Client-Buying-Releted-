import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Pay = () => {
    const {loading} = useAuth()
    return (
        <div>
          {!loading ?   <h1>I am Pament Page</h1> : <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
        </div>
    );
};

export default Pay;