import React, { useState } from "react";
import { useMediaQuery } from "../../../../composables/mediaQueries";

// Styles
import "./WorkItem.scss";

// Components
import Modal from "../../../Modal/Modal";
import WorkCarousel from "../WorkCarousel/WorkCarousel";

// Types
import type { WorkExample } from "../../../../content/our-work";

interface Props {
  item: WorkExample;
  evenIndex: boolean;
}

const WorkItem = ({ item, evenIndex }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isMedium } = useMediaQuery();

  return (
    <>
      <div className="work-item">
        <a id={`${item.id}`} />

        <div
          className={`${
            evenIndex
              ? "xf-bg-primary xf-text-colour-white work-item-content-even"
              : ""
          } work-item-content `}
        >
          <div className="bd-max-width xf-grid xf-align-items-center">
            <img
              className={`xf-w-100 xf-col-12 xf-col-lg-6 ${
                evenIndex ? "" : "xf-col-offset-lg-7"
              }`}
              src={item.img}
              alt=""
            />

            <div
              className={`xf-col-12 xf-col-lg-6 ${
                evenIndex ? "" : "xf-col-offset-lg-1 xf-flex-order-minus-1"
              }`}
            >
              <div className="xf-flex xf-text-8 xf-text-10-md">
                <p>{item.location}</p>

                <p className="xf-ml-auto">{item.completedDate}</p>
              </div>

              <h2
                className={`${
                  evenIndex ? "" : "xf-text-colour-primary"
                } xf-fw-700 xf-text-20 xf-text-28-md xf-mt-1 xf-mt-lg-0 xf-mb-2`}
              >
                {item.title}
              </h2>

              {item.desc.map((desc, i) => (
                <p
                  key={i}
                  className={`${
                    evenIndex ? "xf-text-colour-grey-lighten-2" : ""
                  } xf-text-12 xf-text-14-md xf-mb-2`}
                >
                  {desc}
                </p>
              ))}

              <p
                className={`${
                  evenIndex ? "" : "xf-text-colour-primary xf-mb-4"
                } xf-mt-4 xf-mt-lg-8 xf-text-12 xf-text-14-md xf-fw-600 xf-text-d-underline xf-cursor-pointer xf-hover`}
                onClick={() => setIsModalOpen(true)}
              >
                View more images
              </p>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          width={!isMedium ? "95%" : "750px"}
        >
          <WorkCarousel images={item.additionalImages} />
        </Modal>
      </div>
    </>
  );
};

export default WorkItem;
