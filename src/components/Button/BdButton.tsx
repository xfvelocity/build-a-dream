import "./BdButton.scss";

const BdButton = ({
  children = "",
  backgroundColour = "white",
  textColour = "primary",
  fontSize = 14,
  fullWidth = false,
}) => {
  return (
    <button
      className={`bd-button xf-text-${fontSize} xf-px-4 xf-py-2 xf-bg-${backgroundColour} xf-text-colour-${textColour} ${
        fullWidth ? "xf-w-100" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default BdButton;
