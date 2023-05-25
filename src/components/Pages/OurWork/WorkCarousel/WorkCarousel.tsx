import React, { useRef } from "react";

// Swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { NavigationOptions } from "swiper/types";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface Props {
  images: string[];
}

const WorkCarousel = ({ images }: Props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      speed={1000}
      spaceBetween={5}
      loop
      pagination
      onInit={(swiper) => {
        if (swiper?.params?.navigation) {
          (swiper.params.navigation as NavigationOptions).prevEl =
            prevRef.current;
          (swiper.params.navigation as NavigationOptions).nextEl =
            nextRef.current;

          swiper.navigation.init();
          swiper.navigation.update();
        }
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="xf-pb-8">
            <img className="xf-w-100" src={img} alt="" />
          </div>
        </SwiperSlide>
      ))}

      {/* TODO: Update with icon */}
      <div className="arrows xf-flex xf-z-5">
        <div className="prev-arrow" ref={prevRef}>
          <img src="/icons/left-arrow.svg" alt="" />
        </div>

        <div className="xf-ml-auto next-arrow" ref={nextRef}>
          <img src="/icons/right-arrow.svg" alt="" />
        </div>
      </div>
    </Swiper>
  );
};

export default WorkCarousel;
