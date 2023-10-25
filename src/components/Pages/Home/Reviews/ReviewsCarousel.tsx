import React from "react";
import { ReactSVG } from "react-svg";

// ** Swiper **
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ** Images **

const ReviewsCarousel = () => {
  // ** Data **
  const reviews = [
    {
      text: "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent and I have no hesitation in recommending him to everyone.",
      reviewer: "Keith Duke",
    },
    {
      text: "Completed my decking, turfing and patio exactly as requested. Could not be happier. Hassle free and excellent quality end result. Would recommend 100%",
      reviewer: "Michelle Rachael",
    },
    {
      text: "Experienced, professional and competitive, Dominic is reliable and very creative and can easily turn your dream garden into a reality!!",
      reviewer: "Zara MacDougall",
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      speed={1000}
      spaceBetween={50}
      loop
      pagination
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <div className="xf-text-center xf-pb-10 xf-pb-xl-15 xf-cursor-grab">
            <div className="reviews-carousel">
              <ReactSVG className="start-quote" src={`icons/start-quote.svg`} />

              <p className="xf-text-16 xf-mx-4 xf-text-20-lg">{review.text}</p>

              <ReactSVG className="end-quote" src={`icons/end-quote.svg`} />
            </div>

            <p className="xf-mt-4 xf-text-colour-primary xf-fw-600">
              {review.reviewer}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;
