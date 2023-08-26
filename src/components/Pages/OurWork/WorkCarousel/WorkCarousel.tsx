import React from "react";

// ** Swiper **
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface Props {
  images: string[];
}

const WorkCarousel = ({ images }: Props) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      speed={500}
      spaceBetween={5}
      loop
      pagination={{ clickable: true }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="work-carousel-img xf-mb-7 xf-p-1 xf-cursor-grab">
            <img className="xf-w-100" src={img} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkCarousel;
