import React from "react";

// ** Composables **
import { initObserver } from "../../../../composables/intersectionObserver";

// ** Styles **
import "./Reviews.scss";

// ** Components **
import ReviewsCarousel from "./ReviewsCarousel";

const Reviews = () => {
  // ** Data **
  const { inView } = initObserver("reviews");

  return (
    <div
      id="reviews"
      className={`reviews xf-pt-15 xf-pb-10 transition ${
        inView ? "transition-in-view" : ""
      }`}
    >
      <div className="reviews-content">
        <ReviewsCarousel />
      </div>
    </div>
  );
};

export default Reviews;
