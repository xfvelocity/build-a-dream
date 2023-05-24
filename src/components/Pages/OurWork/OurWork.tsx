import React from "react";

// Content
import { examplesOfWork } from "../../../content/our-work";

// Component
import WorkItem from "./WorkItem/WorkItem";

const OurWork = () => {
  return (
    <div>
      {examplesOfWork.map((example, i) => (
        <WorkItem key={i} item={example} evenIndex={i % 2 === 0} />
      ))}
    </div>
  );
};

export default OurWork;
