import { useRef } from "react";
import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import HeaderImage from "../../images/header.png";

const OurWorkCarousel = () => {
  const workExamples = [
    {
      id: 1,
      image: HeaderImage,
      title: "Indian Sandstone patio",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 2,
      image: HeaderImage,
      title: "Outdoor living area",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 3,
      image: HeaderImage,
      title: "Circular patio & lawn",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 4,
      image: HeaderImage,
      title: "Decking",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 5,
      image: HeaderImage,
      title: "Driveway",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="our-work-carousel">
      <Swiper
        modules={[Pagination, Navigation]}
        speed={1000}
        spaceBetween={50}
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
        {workExamples.map((example, i) => (
          <SwiperSlide key={i}>
            <div className="xf-pb-10">
              <img className="xf-w-100" src={example.image} alt="" />

              <h3 className="xf-text-colour-primary xf-mt-2">
                {example.title}
              </h3>
              {example.text.map((t, ti) => (
                <p className="xf-mb-2" key={ti}>
                  {t}
                </p>
              ))}
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
