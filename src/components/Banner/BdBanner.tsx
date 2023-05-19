import React from "react";

const BdBanner = ({
  backgroundColour = "primary",
  textColour = "white",
  children = "",
  classNames = "",
}) => {
  return (
    <h2
      className={`xf-fw-700  xf-w-max-content xf-z-5 xf-h-max-content ${classNames}`}
    >
      <div
        className={`xf-py-2 xf-px-6 xf-w-max-content xf-mb-1 xf-text-24 xf-text-28-lg xf-bg-${backgroundColour} xf-text-colour-${textColour}`}
      >
        {children}
      </div>
    </h2>
  );
};

export default BdBanner;
