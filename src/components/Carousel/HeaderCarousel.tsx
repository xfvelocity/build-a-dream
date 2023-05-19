// Swiper
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import HeaderImage from "../../images/header.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeaderCarousel = () => {
  const images = [HeaderImage, HeaderImage, HeaderImage, HeaderImage];

  return (
    <Swiper modules={[Autoplay]} speed={1000} autoHeight autoplay loop>
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <img className="xf-w-100" src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderCarousel;
