import React from "react";

interface Props {
  placeholder?: string;
  type?: string;
  name: string;
  label: string;
  classNames?: string;
  rows?: number;
  errorMessage?: string;
  required?: boolean;
}

const TextArea = ({
  placeholder,
  name,
  label,
  classNames,
  rows = 5,
  errorMessage,
  required,
}: Props) => {
  return (
    <div className={classNames}>
      <label>{label}</label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
      />
      {errorMessage && (
        <span className="xf-ml-1 xf-text-12 xf-text-colour-red-darken-2">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextArea;
