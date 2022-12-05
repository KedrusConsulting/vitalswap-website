import React from "react";
import Rating from "@mui/material/Rating";

function TestimonialCard({ userName, review, rating, imageUrl }) {
  return (
    <blockquote
      data-aos="fade-up"
      data-aos-duration="2000"
      className="testimonials__card"
    >
      <img src={imageUrl} alt="User avatar" className="testimonials__avatar" />
      <h4>{userName}</h4>

      <p>{review}</p>

      <Rating size="large" name="read-only" value={rating} readOnly />
    </blockquote>
  );
}

export default TestimonialCard;
