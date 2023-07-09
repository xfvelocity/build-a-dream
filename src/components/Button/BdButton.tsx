import React from "react";

// ** Styles **
import "./BdButton.scss";

interface Props {
  children: any;
  backgroundColour?: string;
  textColour?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const BdButton = ({
  children = "",
  backgroundColour = "white",
  textColour = "primary",
  fullWidth = false,
  type = "button",
}: Props) => {
  return (
    <button
      className={`bd-button xf-hover xf-text-14 xf-text-18-xl xf-px-4 xf-px-xl-6 xf-py-2 xf-py-xl-3 xf-bg-${backgroundColour} xf-text-colour-${textColour} ${
        fullWidth ? "xf-w-100" : ""
      }`}
      type={type}
    >
      {children}
    </button>
  );
};

export default BdButton;
