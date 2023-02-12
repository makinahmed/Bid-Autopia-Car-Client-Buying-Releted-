import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
const GiveReview = () => {
  const [reviews, setReviews] = useState();
  const { newUser, loading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviews = { ...reviews };
    newReviews[field] = value;
    newReviews.fullName = newUser?.fullName;
    newReviews.email = newUser?.email;
    setReviews(newReviews);
  };
  const handleOnSubmit = (e) => {
    fetch(`https://bid-autopia-server-makinahmed.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    });
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div
      style={{ margin: "25px 0", textAlign: "left", height: "650px" }}
      className="bg-info p-5"
    >
      {!loading ? (
        <form
          onSubmit={handleOnSubmit}
          style={{ width: "400px" }}
          className="bg-white p-3 rounded m-auto"
        >
          <h2 className="my-5 text-center">Review Form</h2>
          <input
            placeholder="fullName"
            className="w-100"
            type="text"
            name="fullName"
            value={newUser?.fullName}
          />
          <br />
          <br />

          <input
            placeholder="email"
            value={newUser?.email}
            className="w-100"
            type="email"
            name="email"
          />
          <br />
          <br />
          <input
            placeholder="rete us out of 5"
            className="w-100"
            type="text"
            name="rating"
            onBlur={handleOnBlur}
          />
          <br />
          <br />
          <textarea
            placeholder="drop your opinion"
            className="w-100"
            type="text"
            name="opinion"
            onBlur={handleOnBlur}
          />
          <br />
          <br />

          <button className="btn btn-info w-100" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <Spinner
          style={{ margin: "250px 500px" }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default GiveReview;
