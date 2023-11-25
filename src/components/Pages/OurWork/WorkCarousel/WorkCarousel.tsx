import React from "react";
import type { Image } from "../../../../content/our-work";
import { useMediaQuery } from "../../../../composables/mediaQueries";

// ** Swiper **
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface Props {
  images: Image[];
}

const WorkCarousel = ({ images }: Props) => {
  // ** Data **
  const { isSmall } = useMediaQuery();

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
            <img
              className="xf-w-100"
              src={isSmall ? img.large : img.small}
              alt=""
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkCarousel;
