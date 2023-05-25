import { useRef } from "react";
import React from "react";
import { useMediaQuery } from "../../../../composables/mediaQueries";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Content
import { examplesOfWork } from "../../../../content/our-work";

const OurWorkCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { isLarge } = useMediaQuery();

  return (
    <div className="our-work-carousel">
      <Swiper
        modules={[Pagination, Navigation]}
        speed={800}
        slidesPerView={isLarge ? 1.5 : 1}
        spaceBetween={80}
        centeredSlides
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
        {examplesOfWork.map((example, i) => (
          <SwiperSlide key={i}>
            <div className="xf-grid xf-pb-10 xf-pb-lg-15">
              <img
                className="xf-col-12 xf-col-md-6 xf-col-lg-6"
                src={example.img}
                alt=""
              />

              <div className="xf-col-12 xf-col-md-6 xf-col-lg-5 xf-ml-md-3 xf-py-lg-4">
                <h3 className="xf-text-colour-primary xf-text-24-lg xf-text-28-xl xf-fw-600 xf-mb-xl-2 xf-mt-2 xf-mt-md-0">
                  {example.title}
                </h3>
                {example.desc.map((desc, ti) => (
                  <p className="xf-mb-2" key={ti}>
                    {desc}
                  </p>
                ))}
                <a
                  href={`/our-work#${example.id}`}
                  className="xf-text-colour-primary"
                >
                  Learn more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* TODO: Update with icon */}
        {/* <div className="prev-arrow" ref={prevRef}>
          <Image src={LeftArrowIcon} alt="" />
        </div>
        <div className="next-arrow" ref={nextRef}>
          <Image src={RightArrowIcon} alt="" />
        </div> */}
      </Swiper>
    </div>
  );
};

export default OurWorkCarousel;
