"use client";

import { useRef, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Image from "next/image";

// Images
import HeaderImage from "../../assets/images/header.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.svg";
import RightArrowIcon from "../../assets/icons/right-arrow.svg";
import { NavigationOptions } from "swiper/types";

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
      title: "Indian Sandstone patio 2",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 3,
      image: HeaderImage,
      title: "Indian Sandstone patio 3",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 4,
      image: HeaderImage,
      title: "Indian Sandstone patio 3",
      text: [
        "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. ",
        "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
      ],
    },
    {
      id: 5,
      image: HeaderImage,
      title: "Indian Sandstone patio 3",
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
              <Image
                src={example.image}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />

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
        <div className="prev-arrow" ref={prevRef}>
          <Image src={LeftArrowIcon} alt="" />
        </div>
        <div className="next-arrow" ref={nextRef}>
          <Image src={RightArrowIcon} alt="" />
        </div>
      </Swiper>
    </div>
  );
};

export default OurWorkCarousel;
