import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState()
    // const [isApproved, setIsApproved] = useState()
    const { loading, isAdmin, setLoading, user } = useAuth()

    useEffect(() => {

        fetch(`https://rocky-mountain-28255.herokuapp.com/manageAllOrders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })
    }, [isAdmin])


    const handleClick = (email, id) => {
        setLoading(true)
        const alert = window.confirm("Are You Sure?")

        if (alert) {
            fetch(`https://rocky-mountain-28255.herokuapp.com/cancelOrder?email=${email}&&id=${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    const updatedOrders = orders.map(myorder => myorder)
                    setOrders(updatedOrders)
                }).finally(() => setLoading(false))
        } else {
            setLoading(false)
        }

    }
    // console.log(loading);
    const handleOnclick = (email, id) => {
        setLoading(true)
        const approveProduct = { email, id }
        fetch(`https://rocky-mountain-28255.herokuapp.com/approve`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approveProduct)
        })
            .then(res => res.json())
            .then(data => {
                const approvedOrders = orders.filter(myorder => myorder._id != id)
                setOrders(approvedOrders)
            })
            .finally(() => setLoading(false))
    }

    return (
        <>
            {!loading && <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th className="fs-3">#</th>
                        <th className="fs-3 text-center">Name</th>
                        <th className="fs-3 text-center">Car Name</th>
                        <th className="fs-3 text-center">Status</th>
                        <th className="fs-3 text-center">Approve</th>
                        <th className="fs-3 text-center">Cancel Order</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        orders?.map(order => <tr key={order._id}>
                            <td className=" fs-3">#</td>
                            <td className="fs-4 text-center">{order?.fullName}</td>
                            <td className="fs-4 text-center">{order?.productName}</td>
                            <td className="fs-4 text-center">{order?.status}</td>
                            <td><button className="btn btn-info fs-5 mx-auto" onClick={() => handleOnclick(order?.email, order?._id)}>Approve booking request</button></td>


                            <td><button
                                className="btn btn-danger fs-5 mx-auto"
                                onClick={() => handleClick(order?.email, order?._id)}

                            >Delete</button></td>

                        </tr>)}
                </tbody>
            </Table>
            }
            {
                loading && <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </>
    )
};

export default ManageAllOrders;