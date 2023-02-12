import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const [myorders, setMyOrders] = useState([]);
  const { loading, setLoading, user } = useAuth();

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://bid-autopia-server-makinahmed.vercel.app/myOrders/${user.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("bid_autoPia")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .finally(() => setLoading(false));
  }, [user.email]);

  const handleClick = (email, id) => {
    setLoading(true);
    const alert = window.confirm("Are You Sure?");
    if (alert) {
      fetch(
        `https://bid-autopia-server-makinahmed.vercel.app/cancelOrder?email=${email}&&id=${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const updatedOrders = myorders.filter((myorder) => myorder._id != id);
          setMyOrders(updatedOrders);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      {!loading ? (
        <Table responsive style={{ marginTop: "20px" }} striped bordered hover>
          <thead>
            <tr>
              <th className="fs-3">#</th>
              <th className="fs-3">Name</th>
              <th className="fs-3">Car Name</th>
              <th className="fs-3">Status</th>
              <th className="fs-3">Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {myorders?.map((myorder) => (
              <tr key={myorder._id}>
                <td className="fs-3">#</td>
                <td className="text-center" style={{ fontSize: "22px" }}>
                  {myorder?.fullName}
                </td>
                <td className="text-center" style={{ fontSize: "22px" }}>
                  {myorder?.productName}
                </td>
                <td className="text-center" style={{ fontSize: "22px" }}>
                  {myorder?.status}
                </td>
                <td className="text-center" style={{ fontSize: "22px" }}>
                  <button
                    className="fs-5 btn btn-danger "
                    onClick={() => handleClick(myorder?.email, myorder?._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Spinner
          style={{ margin: "250px 500px" }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {/* : <h3 className="text-danger fs-1 text-center my-5">Please Order a Car!!</h3>} */}
    </>
  );
};

export default MyOrders;

/*


: <Spinner style={{ margin: '250px 500px' }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}*/
