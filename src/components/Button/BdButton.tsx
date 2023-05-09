import "./BdButton.scss";

const BdButton = ({
  children = "",
  backgroundColour = "white",
  textColour = "primary",
  fontSize = 14,
}) => {
  return (
    <div className="bd-button-container">
      <button
        className={`bd-button xf-text-${fontSize} xf-px-4 xf-py-1 xf-bg-${backgroundColour} xf-text-colour-${textColour}`}
      >
        {children}
      </button>
    </div>
  );
};

export default BdButton;
