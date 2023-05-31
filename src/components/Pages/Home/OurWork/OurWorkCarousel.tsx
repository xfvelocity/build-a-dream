import React, { useState } from "react";

import { useMediaQuery } from "../../../../composables/mediaQueries";
import type { WorkExample } from "../../../../content/our-work";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

// Components
import OurWorkModal from "../../../OurWorkModal/OurWorkModal";

interface Props {
  items: (WorkExample | undefined)[];
}

const OurWorkCarousel = ({ items }: Props) => {
  const { isExtraLarge } = useMediaQuery();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<WorkExample | null>(null);

  const viewImages = (item: WorkExample): void => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="our-work-carousel">
      <Swiper
        modules={[Pagination]}
        speed={800}
        slidesPerView={isExtraLarge ? 1.5 : 1}
        spaceBetween={80}
        centeredSlides
        loop
        pagination
      >
        {items.map(
          (example, i) =>
            example && (
              <SwiperSlide key={i}>
                <div className="work-carousel xf-grid xf-pb-10 xf-pb-md-15 xf-align-items-center">
                  <img
                    className="xf-cursor-pointer xf-hover xf-col-12 xf-col-md-6 xf-col-lg-6"
                    src={example.img}
                    alt=""
                    onClick={() => viewImages(example)}
                  />

                  <div className="xf-col-12 xf-col-md-6 xf-col-xl-5 xf-ml-md-3">
                    <h3 className="xf-text-colour-primary xf-mb-2 xf-text-20 xf-text-24-lg xf-text-28-xl xf-fw-600 xf-mb-xl-2 xf-mt-2 xf-mt-md-0">
                      {example.title}
                    </h3>

                    {example.desc.map((desc, ti) => (
                      <p className="xf-mb-2" key={ti}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>

      <OurWorkModal
        item={selectedItem}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default OurWorkCarousel;
