"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/pagination";

// Components
import Image from "next/image";

// Images
import StartQuoteIcon from "../../assets/icons/start-quote.svg";
import EndQuoteIcon from "../../assets/icons/end-quote.svg";

const ReviewsCarousel = () => {
  const reviews = [
    {
      text: "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent and I have no hesitation in recommending him to everyone.",
      reviewer: "Keith Duke",
    },
    {
      text: "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent and I have no hesitation in recommending him to everyone.",
      reviewer: "Keith Duke",
    },
    {
      text: "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent and I have no hesitation in recommending him to everyone.",
      reviewer: "Keith Duke",
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
          <div className="xf-text-center xf-pb-10">
            <div className="reviews-carousel">
              <Image className="start-quote" src={StartQuoteIcon} alt="" />
              <p className="xf-text-16 xf-mx-4">{review.text}</p>
              <Image className="end-quote" src={EndQuoteIcon} alt="" />
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
