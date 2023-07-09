import React from "react";

// ** Composables **
import { initObserver } from "../../../../composables/intersectionObserver";

// ** Styles **
import "./OurWork.scss";

// ** Content **
import { WorkExample, examplesOfWork } from "../../../../content/our-work";

// ** Components **
import OurWorkCarousel from "./OurWorkCarousel";
import BdBanner from "../../../Banner/BdBanner";
import BdButton from "../../../Button/BdButton";

const OurWork = () => {
  // ** Data **
  const { inView } = initObserver("our-work");

  const workIds: number[] = [2, 3, 4, 5, 6];
  const workExamples: (WorkExample | undefined)[] = workIds.map((id) =>
    examplesOfWork.find((e) => e.id === id)
  );

  return (
    <div
      className={`our-work transition ${inView ? "transition-in-view" : ""}`}
      id="our-work"
    >
      <div className="xf-py-15">
        <BdBanner classNames="xf-mx-auto xf-mb-10 xf-mb-lg-15">
          Our Latest Work
        </BdBanner>

        <OurWorkCarousel items={workExamples} />

        <div className="xf-flex-center xf-mt-8">
          <a href="/our-work">
            <BdButton backgroundColour="primary" textColour="white">
              View more examples
            </BdButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
