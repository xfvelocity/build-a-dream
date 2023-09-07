import React from "react";
import { ReactSVG } from "react-svg";

// ** Styles **
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
            <div className="xf-flex xf-mb-2">
              <ReactSVG
                className="xf-cursor-pointer xf-hover xf-ml-auto xf-mb-1"
                src="/icons/close.svg"
                style={{ height: 20, width: 20 }}
                onClick={() => setIsOpen(false)}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
