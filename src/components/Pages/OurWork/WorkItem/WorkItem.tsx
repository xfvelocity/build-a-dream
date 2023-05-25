import React, { useState } from "react";

// Styles
import "./WorkItem.scss";
import Modal from "../../../Modal/Modal";
import WorkCarousel from "../WorkCarousel/WorkCarousel";

interface Props {
  item: {
    img: string;
    location: string;
    completedDate: string;
    title: string;
    desc: string[];
    additionalImages: string[];
  };
  evenIndex: boolean;
}

const WorkItem = ({ item, evenIndex }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="work-item">
        <div
          className={`${
            evenIndex ? "xf-bg-primary xf-text-colour-white" : ""
          } xf-py-10`}
        >
          <div className="bd-max-width">
            <img className="xf-w-100" src={item.img} alt="" />

            <div
              className="xf-flex xf-text-8"
              style={{
                marginTop: "-3px",
              }}
            >
              <p>{item.location}</p>

              <p className="xf-ml-auto">{item.completedDate}</p>
            </div>

            <h2
              className={`${
                evenIndex ? "" : "xf-text-colour-primary"
              } xf-fw-700 xf-text-20 xf-mt-2 xf-mb-1`}
            >
              {item.title}
            </h2>

            {item.desc.map((desc, i) => (
              <p
                key={i}
                className={`${
                  evenIndex ? "xf-text-colour-grey-lighten-2" : ""
                } xf-text-12 xf-mb-2`}
              >
                {desc}
              </p>
            ))}

            <p
              className={`${
                evenIndex ? "" : "xf-text-colour-primary"
              } xf-mt-4 xf-text-12 xf-text-d-underline xf-cursor-pointer`}
              onClick={() => setIsModalOpen(true)}
            >
              View more
            </p>
          </div>
        </div>

        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} width="95%">
          <WorkCarousel images={item.additionalImages} />
        </Modal>
      </div>
    </>
  );
};

export default WorkItem;
