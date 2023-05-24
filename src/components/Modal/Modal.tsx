import React from "react";

// Styles
import "./Modal.scss";

interface Props {
  isOpen: boolean;
  children: any;
}

const Modal = ({ isOpen, children }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content xf-p-2">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
