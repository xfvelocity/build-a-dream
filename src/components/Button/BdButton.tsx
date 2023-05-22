import React from "react";

import "./BdButton.scss";

const BdButton = ({
  children = "",
  backgroundColour = "white",
  textColour = "primary",
  fullWidth = false,
}) => {
  return (
    <button
      className={`bd-button xf-text-14 xf-text-18-xl2 xf-px-4 xf-px-xl2-6 xf-py-2 xf-bg-${backgroundColour} xf-text-colour-${textColour} ${
        fullWidth ? "xf-w-100" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default BdButton;
