import React from "react";

interface Props {
  placeholder?: string;
  type?: string;
  name: string;
  label: string;
  classNames?: string;
  errorMessage?: string;
  required?: boolean;
}

const TextInput = ({
  placeholder,
  type = "text",
  name,
  label,
  classNames,
  errorMessage,
  required,
}: Props) => {
  return (
    <div className={classNames}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
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

export default TextInput;
