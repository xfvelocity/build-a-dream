import React from "react";

// ** Composables **
import { initObserver } from "../../../../composables/intersectionObserver";

// ** Styles **
import "./Reviews.scss";

// ** Components **
import ReviewsCarousel from "./ReviewsCarousel";

const Reviews = () => {
  const { inView } = initObserver("reviews");

  return (
    <div
      className={`reviews xf-pt-15 xf-pb-10 ${inView ? "reviews-in-view" : ""}`}
      id="reviews"
    >
      <div className="reviews-content">
        <ReviewsCarousel />
      </div>
    </div>
  );
};

export default Reviews;
