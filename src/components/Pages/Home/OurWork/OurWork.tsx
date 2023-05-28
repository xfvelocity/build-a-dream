import React from "react";

// Styles
import "./OurWork.scss";

// Components
import OurWorkCarousel from "./OurWorkCarousel";
import BdBanner from "../../../Banner/BdBanner";

// Content
import { WorkExample, examplesOfWork } from "../../../../content/our-work";

const OurWork = () => {
  const workIds: number[] = [1, 2, 3, 4, 5];
  const workExamples: (WorkExample | undefined)[] = workIds.map((id) =>
    examplesOfWork.find((e) => e.id === id)
  );

  return (
    <div className="our-work">
      <div className="xf-py-15">
        <BdBanner classNames="xf-mx-auto xf-mb-10 xf-mb-lg-15">
          Our Latest Work
        </BdBanner>

        <OurWorkCarousel items={workExamples} />
      </div>
    </div>
  );
};

export default OurWork;
