import React, {  useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Registration = () => {

    const history = useHistory()

    const [createUser, setCreateUser] = useState()
    const { registerUser, loading, setLoading } = useAuth();

    const handleOnSubmit = e => {

        e.preventDefault()
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newCreateUser = { ...createUser }
        newCreateUser[field] = value;
        setCreateUser(newCreateUser)
    }


    const handleOnClick = () => {
        registerUser(createUser.email, createUser.password, history)
        setLoading(true)
        fetch(`http://localhost:5000/createNewUser`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createUser)
        })
            .then(res => res.json())
            .then(data => console.log(""))
            .finally(() => setLoading(false))
    }



    return (
        <div>
            {!loading ? <div  className="bg-info p-5"style={{  textAlign: 'left',height:'650px' }}>
                <form onSubmit={handleOnSubmit} style={{ width: '400px' }} className="bg-white p-3 rounded m-auto">
                <h2 className="mt-3 mb-5 text-center">Registration Form</h2>
                    <input className="w-100"  placeholder="fullName" type="text" name="fullName" onBlur={handleOnBlur} /><br /><br />
                    <input className="w-100" placeholder="email" type="email" name="email" onBlur={handleOnBlur} /><br /><br />
                    <input className="w-100" placeholder="address" type="address" name="address" onBlur={handleOnBlur} /><br /><br />
                    <input className="w-100" placeholder="phone" type="text" name="phone" onBlur={handleOnBlur} /><br /><br />
                    <input className="w-100" placeholder="password" type="password" name="password" onBlur={handleOnBlur} /><br /><br />
                    <span>Already have an Account?</span><Link to="/login">Login</Link>
                    <br /><br />
                    <button  className="btn btn-info w-100"   onClick={handleOnClick} type="submit">Create an Account</button>
                </form>
               
            </div> : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {/* <h3>{user.email ? <p>yes</p>: '' }</h3> */}
        </div>
    );
};

export default Registration;