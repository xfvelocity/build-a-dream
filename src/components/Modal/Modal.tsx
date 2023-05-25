import React from "react";

// Styles
import "./Modal.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  children: any;
  height?: string;
  width?: string;
}

const Modal = ({ isOpen, setIsOpen, children, height, width }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content xf-p-2"
            style={{ height, width }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
