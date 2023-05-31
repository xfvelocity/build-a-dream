import React, { useState } from "react";
import { useMediaQuery } from "../../../../composables/mediaQueries";

// Styles
import "./WorkItem.scss";

// Components
import OurWorkModal from "../../../OurWorkModal/OurWorkModal";

// Types
import type { WorkExample } from "../../../../content/our-work";

interface Props {
  item: WorkExample;
  evenIndex: boolean;
}

const WorkItem = ({ item, evenIndex }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<WorkExample | null>(null);

  const { isMedium } = useMediaQuery();

  const viewImages = (): void => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="work-item">
        <div
          className={`${
            evenIndex ? "work-item-content-even" : ""
          } work-item-content `}
        >
          <div className="bd-max-width work-item-content-inner xf-grid xf-align-items-center">
            <img
              className={`xf-w-100 xf-col-12 xf-cursor-pointer xf-hover xf-col-lg-6 ${
                evenIndex ? "" : "xf-col-offset-lg-7"
              }`}
              src={item.img}
              alt=""
              onClick={viewImages}
            />

            <div
              className={`xf-col-12 xf-col-lg-6 ${
                evenIndex
                  ? "xf-ml-lg-4"
                  : isMedium
                  ? "xf-col-offset-lg-1 xf-flex-order-minus-1 xf-mr-lg-4"
                  : ""
              }`}
            >
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
            </div>
          </div>
        </div>

        <OurWorkModal
          item={selectedItem}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

export default WorkItem;
