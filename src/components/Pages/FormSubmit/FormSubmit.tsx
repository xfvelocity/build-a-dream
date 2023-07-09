import React from "react";

// ** Styles **
import "./FormSubmit.scss";

// ** Components **
import BdButton from "../../Button/BdButton";

interface Props {
  type: keyof Text;
}

interface Text {
  success: TextContent;
  error: TextContent;
}

interface TextContent {
  title: string;
  desc: string;
  colour: string;
}

const FormSubmit = ({ type }: Props) => {
  // ** Data **
  const text: Text = {
    success: {
      title: "Thank you for your submission",
      desc: "We'll be in touch with you soon",
      colour: "primary",
    },
    error: {
      title: "Oops!",
      desc: "An error occurred whilst sending your request",
      colour: "red-darken-2",
    },
  };

  return (
    <div className="form-submit">
      <div
        className={`bd-max-width xf-center xf-text-center xf-w-100  xf-text-colour-${text[type].colour}`}
      >
        <div>
          <h1 className="xf-text-36 xf-mb-4">{text[type].title}</h1>
          <p>{text[type].desc}</p>
        </div>

        {type === "error" && (
          <p className="xf-mt-4 xf-mb-8 xf-text-colour-secondary">
            Please contact us directly at:{" "}
            <a
              className="xf-text-colour-primary"
              href="mailto:contact@buildadream.co.uk"
            >
              contact@buildadream.co.uk
            </a>
          </p>
        )}

        <div className="xf-flex-center xf-mt-8">
          <a href="/">
            <BdButton backgroundColour="primary" textColour="white">
              Back to home
            </BdButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
