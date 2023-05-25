import React from "react";

// Styles
import "./Reviews.scss";

// Components
import ReviewsCarousel from "./ReviewsCarousel";

const Reviews = () => {
  return (
    <div className="reviews xf-pt-15 xf-pb-10">
      <div className="reviews-content">
        <ReviewsCarousel />
      </div>
    </div>
  );
};

export default Reviews;
