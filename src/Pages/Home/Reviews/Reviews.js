import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";
import "aos/dist/aos.css";

var Rating = require("react-rating").default;
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { loading } = useAuth();
  useEffect(() => {
    fetch("https://bid-autopia-server-makinahmed.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {!loading ? (
        <Container>
          <h1 className="text-success text-center my-5">
            What our Customer says!!
          </h1>
          <Row className="">
            {reviews.map((review) => (
              <Col
                className="shadow-sm p-3 mb-5 bg-body rounded"
                key={review._id}
                md={4}
                sm={6}
              >
                <div data-aos="fade-up">
                  <h3>{review?.fullName}</h3>
                  <p>{`${review?.opinion.slice(0, 100)}...`}</p>
                  <Rating
                    stop={review?.rating}
                    emptySymbol={
                      <FontAwesomeIcon
                        style={{ color: "gold" }}
                        icon={faStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        style={{ color: "black" }}
                        icon={faStar}
                      />
                    }
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Spinner
          style={{ margin: "250px 500px" }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Reviews;
