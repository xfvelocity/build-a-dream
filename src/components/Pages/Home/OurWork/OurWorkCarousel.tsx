import React, { useState } from "react";

import type { WorkExample } from "../../../../content/our-work";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Components
import OurWorkModal from "../../../OurWorkModal/OurWorkModal";

interface Props {
  items: (WorkExample | undefined)[];
}

const OurWorkCarousel = ({ items }: Props) => {
  // ** Data **
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<WorkExample | null>(null);

  // ** Methods **
  const viewImages = (item: WorkExample): void => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="our-work-carousel">
        <Swiper
          modules={[Pagination]}
          speed={800}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          loop
          pagination={{ clickable: true }}
        >
          {items.map(
            (example, i) =>
              example && (
                <SwiperSlide key={i}>
                  <div className="work-carousel xf-grid xf-pb-10 xf-pb-md-15 xf-align-items-center">
                    <img
                      className="our-work-carousel-img xf-cursor-pointer xf-hover xf-col-12 xf-col-md-6 xf-col-lg-6 xf-col-xl-5 xf-col-offset-xl-2"
                      src={example.img.src}
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
      </div>

      <OurWorkModal
        item={selectedItem}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default OurWorkCarousel;
