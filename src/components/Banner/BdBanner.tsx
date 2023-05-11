import React from "react";

const BdBanner = ({
  backgroundColour = "primary",
  fontSize = 24,
  textColour = "white",
  children = "",
}) => {
  return (
    <h2 className="xf-fw-700 xf-mx-auto xf-w-max-content xf-z-5 xf-h-max-content">
      <div
        className={`xf-py-2 xf-px-6 xf-w-max-content xf-mb-1 xf-bg-${backgroundColour} xf-text-colour-${textColour}`}
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </div>
    </h2>
  );
};

export default BdBanner;
