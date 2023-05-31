import React from "react";

import { useMediaQuery } from "../../composables/mediaQueries";

// Styles
import "./OurWorkModal.scss";

// Types
import type { WorkExample } from "../../content/our-work";

// Components
import Modal from "../Modal/Modal";
import WorkCarousel from "../Pages/OurWork/WorkCarousel/WorkCarousel";

interface Props {
  item: WorkExample | null;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

const OurWorkModal = ({ item, isModalOpen, setIsModalOpen }: Props) => {
  const { isLarge, isMedium } = useMediaQuery();

  return (
    <div className="our-work-modal">
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        width={isLarge ? "1000px" : !isMedium ? "95%" : "650px"}
      >
        <WorkCarousel images={item ? item.additionalImages : []} />
      </Modal>
    </div>
  );
};

export default OurWorkModal;
