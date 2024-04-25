import React from "react";

// ** Composables **
import { initObserver } from "../../../composables/intersectionObserver";

// ** Content **
import { examplesOfWork } from "../../../content/our-work";

// ** Components **
import WorkItem from "./WorkItem/WorkItem";

const OurWork = () => {
  // ** Data **
  let itemsInView: { inView: boolean }[] = [];

  examplesOfWork.forEach((_e, i) => {
    itemsInView[i] = initObserver(`work-item-${i}`);
  });

  return (
    <div>
      {examplesOfWork.map((example, i) => (
        <WorkItem
          elementId={`work-item-${i}`}
          elementClass={`transition ${
            itemsInView[i]?.inView ? "transition-in-view" : ""
          }`}
          key={i}
          item={example}
          evenIndex={i % 2 === 0}
        />
      ))}
    </div>
  );
};

export default OurWork;
