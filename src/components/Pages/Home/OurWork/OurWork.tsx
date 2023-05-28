import React from "react";

// Styles
import "./OurWork.scss";

// Components
import OurWorkCarousel from "./OurWorkCarousel";
import BdBanner from "../../../Banner/BdBanner";

const OurWork = () => {
  return (
    <div className="our-work">
      <div className="xf-py-15">
        <BdBanner classNames="xf-mx-auto xf-mb-10">Our Work</BdBanner>

        <OurWorkCarousel />
      </div>
    </div>
  );
};

export default OurWork;
