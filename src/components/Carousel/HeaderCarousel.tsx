"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/autoplay";

// Components
import Image from "next/image";

// Images
import HeaderImage from "../../assets/images/header.png";

const HeaderCarousel = () => {
  const images = [HeaderImage, HeaderImage, HeaderImage, HeaderImage];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      speed={1000}
      loop
      autoplay
      pagination
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image src={image} alt="" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderCarousel;
